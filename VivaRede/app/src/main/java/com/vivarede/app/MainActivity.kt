package com.vivarede.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.google.firebase.auth.FirebaseAuth

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent { VivaRedeApp() }
    }
}

@Composable
fun VivaRedeApp() {
    val auth = remember { FirebaseAuth.getInstance() }
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var error by remember { mutableStateOf("") }
    var user by remember { mutableStateOf(auth.currentUser) }

    if (user == null) {
        Column(
            Modifier.fillMaxSize().padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text("Viva Rede", fontSize = 40.sp)
            Spacer(Modifier.height(24.dp))
            OutlinedTextField(email, { email = it }, label = { Text("E-mail") })
            Spacer(Modifier.height(8.dp))
            OutlinedTextField(password, { password = it }, label = { Text("Senha") })
            Spacer(Modifier.height(12.dp))
            Button({
                auth.signInWithEmailAndPassword(email.trim(), password)
                    .addOnCompleteListener { if (it.isSuccessful) user = auth.currentUser else error = it.exception?.localizedMessage ?: "Erro" }
            }) { Text("Entrar") }
            TextButton({
                auth.createUserWithEmailAndPassword(email.trim(), password)
                    .addOnCompleteListener { if (it.isSuccessful) user = auth.currentUser else error = it.exception?.localizedMessage ?: "Erro" }
            }) { Text("Criar conta") }
            TextButton({
                auth.sendPasswordResetEmail(email.trim())
                    .addOnCompleteListener { error = if (it.isSuccessful) "E-mail de recuperação enviado." else "Não foi possível enviar." }
            }) { Text("Esqueci minha senha") }
            if (error.isNotBlank()) Text(error)
        }
    } else {
        Column(Modifier.fillMaxSize().padding(24.dp)) {
            Text("Viva Rede", fontSize = 32.sp)
            Spacer(Modifier.height(16.dp))
            Text("Feed, Stories, vídeos, posts, memes, figurinhas e Direct.")
            Spacer(Modifier.height(24.dp))
            Button({ auth.signOut(); user = null }) { Text("Sair") }
        }
    }
}