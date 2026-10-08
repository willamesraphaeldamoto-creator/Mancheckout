export const API_URL=(process.env.EXPO_PUBLIC_API_URL||'https://mancheckout.netlify.app').replace(/\/$/,'');
export const checkoutUrl=(id)=>`${API_URL}/c/${id}`;
export const firebaseConfig={apiKey:'AIzaSyDbwotWs3YoHuZQDX83iTW8XRegfbuXX9k',authDomain:'app2026chat.firebaseapp.com',projectId:'app2026chat',storageBucket:'app2026chat.firebasestorage.app',messagingSenderId:'467492070561',appId:'1:467492070561:web:0540e5f54e01c0c4027ce0',measurementId:'G-M1VVJZDVDL'};
export const PROVIDERS={krypt_pix:{label:'Krypt PIX',short:'PIX',icon:'flash'},krypt_crypto:{label:'Krypt Cripto',short:'Cripto',icon:'logo-bitcoin'},abacatepay:{label:'AbacatePay PIX',short:'PIX',icon:'leaf'}};
