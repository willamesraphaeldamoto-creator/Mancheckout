export const C={pine:'#0E7C66',deep:'#083A42',ink:'#0F2A2E',mint:'#7CE8C0',mintSoft:'#E3F8EF',bg:'#F3F7F6',card:'#FFFFFF',line:'#DCE6E4',mute:'#5F7776',warn:'#B7791F',warnSoft:'#FDF3DC',bad:'#C93C3C',badSoft:'#FBE7E7'};
export const brl=c=>(Number(c||0)/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export const toCents=txt=>{const n=Number(String(txt).replace(/\./g,'').replace(',','.'));return Number.isFinite(n)?Math.round(n*100):0};
export const STATUS={PENDING:{label:'Aguardando',fg:C.warn,bg:C.warnSoft},PAID:{label:'Pago',fg:C.pine,bg:C.mintSoft},EXPIRED:{label:'Expirado',fg:C.bad,bg:C.badSoft},CANCELLED:{label:'Cancelado',fg:C.bad,bg:C.badSoft}};
