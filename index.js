

const Discord = require('discord.js');
const client = new Discord.Client();
const prefixe = '!';

client.login('NzUxODExNzM4NjU5MzIzOTA0.X1OhPg.9ZSqPP4NZG3Q1hL1JpsNqeY21mI');
 /*************************/  ///NzIxNzU5NDA4Nzk0NjMyMjMz.XujVkA.NEFDFJvwRs7-tqaX7H3oL9UXDAc
 /*   Commande de Statu   */
 /*************************/

client.on("ready",() => {
	client.user.setActivity("les candidatures", { type: "WATCHING"});
  })



	/************************/
 /* Commande de Bienvenue */
 /*************************/
/*
  client.on('message', message => {
    if(message.content === prefixe + "bvn"){
        message.channel.send(":exclamation: Bonjour, vous vous êtes inscrit pour les recrutements afin de rejoindre le LSPD. :exclamation:");
        
	}*/
	client.on('message', message => {
		if(message.content === prefixe + "candidno"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("Votre candidature est refusée !")
				.setColor("#dd0909")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setThumbnail("https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setDescription("Les recruteurs ont décidés de refuser votre candidature. \n\n**• __Les raisons peuvent être :__**\n\n:one:  Vous avez un casier judiciaire.\n\n:two: Vous n'êtes pas majeur (+21 ans).\n\n :three: Vous n'êtes pas citoyen américain où vous ne possédez pas la Green Card.\n\n**• __Remarque__**\n\nSi la raison du refus est la troisième, les recruteurs vous enverrons un message très prochainement pour vous dire comment retenter votre chance. Si la ou les raisons du refus sont les deux premières, vous ne pourrez pas rejoindre le LSPD.")
				.setTimestamp()
				.setFooter("Merci pour l'intérêt que vous portez au LSPD.",)

				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "candidyes"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("Votre candidature est acceptée !")
				.setColor("#3adf0c")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setThumbnail("https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setDescription("Les recruteurs ont décidés d'accepter votre candidature. \n\n• **__Le recrutement comporte deux phases :__** \n\n`1`: Une partie écrite suivie d'un test sportif et d'un dernier exercice qui vous sera révélé à la fin du test sportif.\n\n`2`: Un entretien oral avec  un recruteur \n\n*Nous vous souhaitons la bienvenue à la Los Santos Police Academy*")
				.setTimestamp()
				.setFooter("Merci pour l'intérêt que vous portez au LSPD.",)
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "présence"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("Manifestez votre présence.")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setThumbnail("https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setDescription("Nous n'avons plus de nouvelles de votre part ! Êtes-vous toujours intéressé à rejoindre les rangs du LSPD ?\n\n Si oui, **manifestez votre présence**, n'attendez plus !\n\n Dans le cas contraire informez-le nous, nous fermerons votre ticket de candidature.")
				.setTimestamp()
				.setColor("#313131")
				.setFooter("Merci pour l'intérêt que vous portez au LSPD.",)
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "intro"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("Bonjour, vous vous apprêtez à vous inscrire à la Los Santos Police Academy")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setDescription("Veuillez indiquer votre Nom et Prénom.")
				.setColor("#143da2")
				.setTimestamp()
				.setFooter("Bienvenue à la Los Santos Police Academy !",);
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "question"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("__Bonjour, avez-vous des questions ?__")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setDescription("Si vous avez des **questions**, ou avez besoin de **renseignements**, nos recruteurs sont à votre disposition pour vous répondre.")
				.setColor("#f7f7f7")
				.setTimestamp()
				.setFooter("Los Santos Police Academy",);
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "entretien"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("__Entretien oral à la Los Santos Police Academy__")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setImage("https://media.discordapp.net/attachments/724743999990268055/740607938892136578/mission_row_lspd_2.png")
				.setDescription("Vous avez passé la première phase avec succès ! <:check:754639563745525760>\n\n**Il ne vous reste plus qu'à passer l'entretien oral avec l'un de nos recruteurs.**\n\n **>** Vous pouvez passer votre entretien oral soit le **mercredi** soit le **jeudi**. \n\n **>** Les recruteurs prendront contact avec vous pour trouver un créneau horaire.\n\n:warning: - **__Remarques__** - :warning: \n\nVeuillez venir en tenue adéquate et à l'heure. Prenez votre carte d'identité,  ainsi qu'à manger et à boire.")
				.setColor("#143da2")
				.setTimestamp()
				.addFields(
					{ name: "Adresse :", value: "*Mission Row, Downtown Los Santos, ÉTAT DE FEVER*"},
				)
				.setFooter("Los Santos Police Academy",);
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "recrutement"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("__Première phrase de votre recrutement__")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setImage("https://media.discordapp.net/attachments/724743999990268055/740607938892136578/mission_row_lspd_2.png")
				.setDescription("Vous participez à la phase 1 du recrutement qui se fera ce mardi à 21h. Le point de rendez-vous sera au pôle-emploi et un bus viendra vous chercher. \n\n:warning: - **__Remarques__** - :warning: \n\nVeuillez venir en **tenue de sport** et à **l'heure**. Pensez à prendre également votre carte d'identité, et votre Green Card si vous n'êtes pas citoyen américain. \n\nPrenez également à manger et à boire, ainsi que des vêtements de rechange si vous le souhaitez et pensez à mémoriser votre numéro de candidat visible sur votre ticket de candidature.")
				.setColor("#143da2")
				.setTimestamp()
				.addFields(
					{ name: "Adresse :", value: "*Mission Row, Downtown Los Santos, ÉTAT DE FEVER*"},
				)
				.setFooter("Los Santos Police Academy",);
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "formulaire"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("__Remplissez ce formulaire__")
				.setColor("#e7cd0a")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setThumbnail("https://media.discordapp.net/attachments/724743999990268055/754672359595573358/memo_1f4dd.png")
				.setDescription("Pour commencer votre inscription, remplissez ce **formulaire**.\n\n Une fois ce formulaire rempli, mettez l'émoticone <:check:754639563745525760> ou informez-le nous directement et les recruteurs accepteront votre candidature ou non.")
				.setTimestamp()
				.setURL("https://docs.google.com/forms/d/e/1FAIpQLSe3Vu-TEYKQwTpuW_rwyA30uzKxMawoMolgyP7aj_y3qWUkLg/viewform")
				.setFooter("Los Santos Police Academy",);
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "patience"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("Restez patient !")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setDescription("Les recruteurs vous donneront une réponse dans les plus brefs délais.")
				.setColor("#143da2")
				.setTimestamp()
				.setFooter("Los Santos Police Academy",);
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "informations"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("__Informations__")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setDescription("**Bonjour,**\n\nVous avez rejoint cette application pour vous inscrire aux recrutements du LSPD.\n\nPour vous inscrire à la Los Santos Police Academy et prendre connaissance de la réponse des recruteurs à propos de votre candidature, veuillez ouvrir un ticket dans #inscription. Ce ticket servira à remplir un formulaire,  communiquer  avec les recruteurs, savoir si votre candidature est acceptée ou non et connaître les différentes dates pour participer au cours théorique et à la session de recrutement.\n\nSi les recruteurs ont refusés votre candidature, les raisons sont les suivantes : \n\n `1`: Vous avez un casier judiciaire.\n\n`2`: Vous n'êtes pas majeur (+21 ans).\n\n`3`: Vous n'êtes pas citoyen américain où vous ne possédez pas la Green Card.\n\n `4`: Votre candidature n'a pas convaincue les recruteurs.\n\n\nSi votre candidature est acceptée, les procédures à suivre pour participer au cours de théorie et à la session de recrutements vous seront expliquées.\n\nNous proposons actuellement des postes de rookies au poste de police de Mission Row. Pour rejoindre le poste de police de Vespucci ou un autre poste de police du LSPD, il faut se rendre sur place afin d'en savoir plus sur les procédures à suivre pour s'inscrire. \n\nSi vous êtes ici, c'est donc pour rejoindre le LSPD et travailler au poste de police de Mission Row.")
				.setColor("#ff0000")
				.setTimestamp()
				.setFooter("Los Santos Police Academy",);
                message.delete()
            message.channel.send(mbed);
		}
		else if(message.content === prefixe + "recrutementyes"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("__Bienvenue au Los Santos Police Department__")
				.setAuthor("Los Santos Police Academy", "https://media.discordapp.net/attachments/724743999990268055/741236807798095892/Logo_LSPD_Officiel.png?width=615&height=615")
				.setDescription("Félicitations, les recruteurs ont décidés de vous accepté au sein du **Los Santos Police Department**  ! \n\n:clipboard: -  **__Informations__** - :clipboard: \n\n Votre période de Rookie débutera dès vendredi soir. Soyez donc présent ce vendredi soir à 21h et veuillez **confirmer votre présence**  afin de recevoir plusieurs formations pour pouvoir servir dans les meilleures conditions possibles.\n\nDe plus vous allez devoir téléchargez dès maintenant plusieurs **documents officiels** vous permettant de venir ce vendredi soir avec des connaissances.\n\nEnfin, veuillez réfléchir à un **matricule** pour nous l'annoncer dès votre venue au poste de police. Nous vous conseillons de réfléchir à **plusieurs matricules**, dans la mesure ou celui que vous souhaitiez prendre soit déjà prit par un agent.\n\n  ** *Nous vous souhaitons la bienvenue au Los Santos Police Department !* **  <:check:741702366973263943>")
				.setColor("#3adf0c")
				message.delete()
			message.channel.send(mbed);
		}
		else if(message.content === prefixe + "documentlspd"){
			const mbed = new Discord.MessageEmbed()
				.setTitle("Informations utiles")
				.setDescription("Votre travail débute dès maintenant.\nRetrouvez ci-dessous les documents utiles à lire avant de venir au poste de police.\n\n")
				.setColor("#2f3136")
				.addFields(
					{ name: "Manuel", value: "[Devenir Policier](https://cdn.discordapp.com/attachments/579022892193284112/742457938303516804/Manuel_du_LSPD-_Version_Officielle.pdf.pdf)", inline: true },
					{ name: "Code pénal", value: "[Connaître le code pénal](https://cdn.discordapp.com/attachments/579022892193284112/725362163690242141/Code_penale_de_lEtat_de_Fever_2.pdf)", inline: true },
					{ name: "Lois de l'État de Fever", value: "[Livre de loi](https://cdn.discordapp.com/attachments/579022892193284112/754264377657393212/Lois_Fever.pdf)"},
				)
				message.delete()
			message.channel.send(mbed);
		}
})

            //message.channel.send(mbed) .then(m => m.react('📝'));//


//client.on('messageReactionAdd', async (reaction, user) => {
    //if (reaction.id === "751846456192663583") { ///id de l'émoji
      //let role = message.guild.roles.cache.find(role => role.name === 'En Attente');
       // message.member.addRole(role.id); //-> donne le rôle
  //  }
//});
