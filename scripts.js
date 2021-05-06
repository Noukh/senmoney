function menu (){
	soldeCompte = 10000;
	affiche();
}
 
function affiche(){
    res =parseInt(prompt("------MENU SENMONEY------ \n Taper le numéro du service choisi \n 1: Solde de mon compte \n 2: Transfert d'argent \n 3: Paiement de facture \n 4: Options"));
    switch(res){
        case 1 : 
        afficherSolde();
        break;
        default:
        break;
		
    }
}

function  afficherSolde() {
    if(confirm("Le solde de votre compte est " + soldeCompte + "\n Voulez-vous retourner au menu ?")){
        affiche();
    }
}
