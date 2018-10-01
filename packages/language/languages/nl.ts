import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Er was een probleem in de communicatie met de server, probeer het later opnieuw.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Hallo wereld`,
  noConnection: `Geen connectie`,
  retry: `Opnieuw proberen`,
  submit: `INSTUREN`,
  next: `Volgende`,
  cancel: `Annuleer`,
  back: `Ga terug`,
  copy: `Kopieer naar klembord`,
  confirmAccount: `Bevestig`,
  createAccount: `Maak account aan`,
  recoverAccount: `Herstel account`,
  removeAccount: `Verwijder account`,
  updateAccount: `Werk account bij`,
  loginAction: `Ontgrendel`,
  enterPin: `TOETS ALSTUBLIEFT UW PINCODE IN`,
  changePin: `Wijzig pincode`,
  enterCurrentPin: `Toets huidige pincode in`,
  logoutAction: `UITLOGGEN`,
  seeAllActivity: `Bekijk alle activiteiten`,
  copiedClipboard: `Gekopieerd naar het klembord`,
  pleaseWait: `Even geduld alstublieft`,
  addFriend: `Vriend toevoegen`,
  addFriendConfirmationQuestion: `Bent u zeker dat u deze gebruiker wilt toevoegen als vriend?`,
  removeFriend: `Verwijder vriend`,
  currentFriends: `Huidige vrienden`,
  removeFriendConfirmationQuestion: `Bent u zeker dat u deze gebruiker wilt verwijderen als vriend?`,
  inviteFriends: `Nodig vrienden uit voor Lndr`,
  tryLndr: `Probeer de Lndr App hier:`,
  friendInfo: `Meer informatie over deze vriendschap:`,
  noFriends: `Voeg vrienden toe om aan de slag te gaan!`,
  noMatches: `Geen overeenkomende gebruikers gevonden`,
  noBalances: `U heeft geen geregistreerde schulden`,
  addFriendButton: `Vriend toevoegen`,
  alreadyFriendsButton: `Vrienden`,
  friendShell: `Vriend`,
  tip: `Tip:`,
  notice: `Let op:`,
  welcome: `Welkom bij uw LNDR`,
  noBalanceWarning: `We waren niet in staat om uw saldo op dit moment te laden, probeer het later opnieuw.`,
  totalBalance: `Totaal saldo:`,
  totalBalances: `Totaal tegenpartijen:`,
  newTransaction: `Nieuwe transactie`,
  needsReview: `In behandeling`,
  owesMe: `Ik heb tegoed`,
  iOwe: `Ik ben aan iemand schuldig`,
  newPassword: `Nieuw wachtwoord (minimaal 8 tekens)`,
  confirmPassword: `Bevestig wachtwoord`,
  newPin: `Nieuwe 4-cijferige pincode`,
  enterNewPin: `STEL ALSTUBLIEFT EEN NIEUWE 4-CIJFERIGE PINCODE IN`,
  confirmPin: `BEVESTIG UW PINCODE`,
  newAccount: `Maak een nieuw account aan`,
  loginAccount: `Ontgrendel uw account`,
  recoverExistingAccount: `Herstel een bestaand account`,
  recoverMnemonic: `Geheugensteun (12 woorden die weergegeven zijn \ntoen u uw account heeft aangemaakt)`,
  recoverMnemonicLengthError: `De geheugensteun moet precies 12 woorden bevatten`,
  successTitle: `Succes`,
  errorTitle: `Fout`,
  showMnemonic: `Toon geheugensteun van 12 woorden`,
  mnemonicExhortation: `Deze zin van 12 woorden is vereist om uw account te herstellen, bewaar het op een veilige en geheime plek`,
  addressExhortation: `Stuur Ethereum naar uw adres, zodat u uw schulden kunt betalen op Lndr`,
  removeAccountTitle: `Bent u zeker dat u uw account wilt verwijderen van dit apparaat?`,
  removeAccountExhortation: `Zorg ervoor dat u toegang tot uw geheugensteun heeft om later uw account te herstellen, want dit is een permanente verwijdering van uw accountgegevens van dit apparaat.`,
  myAccount: `Mijn account`,
  setNickname: `Stel een gebruikersnaam in, zodat uw vrienden naar u kunnen zoeken`,
  setEmail: `Stel een e-mailadres in om informatie over Lndr updates te ontvangen`,
  nickname: `Gebruikersnaam (kleine letters en nummers)`,
  email: `E-mailadres`,
  lndrVerified: {
    ok: `OK`,
    title: `Stel hogere limiet afwikkeling en crypto uitbetalingsbedragen door het invullen van Ken uw klant eisen.`,
    statusTitle: `De huidige status van je verificatiecode is:`,
    tryAgain: `We waren niet in staat om uw identiteit te verifiëren. Gelieve opnieuw uw gegevens en zorgen ervoor dat uw foto's zijn goed leesbaar.`,
    formMessage: `Vul alle onderstaande velden`,
    button: `Verifieer uw identiteit`,
    prefix: `Lees ons `,
    linkTitle: `privacy beleid`,
    postfix: `voor de manier waarop uw persoonlijke gegevens worden beheerd.`,
    upload: `Upload een `,
    governmentId: `door de overheid uitgegeven identiteitsbewijs`,
    selfie: `Upload een selfie met uw door de overheid uitgegeven identiteitsbewijs`,
    proofOfAddress: `Bewijs van adres`,
    ifNotId: `(Zoniet ID)`,
    agree: `Ik heb gelezen en ga akkoord met de `,
    agreeLink: `Privacy Policy`,
    success: `KYC is ingediend.`,
    idInfoHeader: `Voorbeelden omvatten ID:`,
    passport: `Paspoort`,
    drivers: `Rijbewijs`,
    national: `Nationale identiteitskaart`,
    addressInfoHeader: `Voorbeelden van bewijs van adres:`,
    bank: `Bankafschrift`,
    utility: `Utility Bill`,
    other: `andere Document`,
    chooseGovernmentPhoto: `Kies regering ID Photo`,
    chooseSelfiePhoto: `Kies selfie Photo`,
    chooseAddressPhoto: `Kies Bewijs van Adres Photo`,
    emailRequired: `Je hebt een e-mail om uw identiteit te verifiëren, klikt u op "Wijzig e-mailadres"`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Voornaam`,
      lastName: `Achternaam`,
      street: `Adres`,
      city: `stad`,
      state: `Staat / Provincie`,
      postalCode: `Postcode`,
      country: `Selecteer land`,
      phone: `Telefoonnummer`,
      dob: `Geboortedatum (YYYY-MM-DD)`,
    },
    formErrors: {
      firstName: `Voornaam is verplicht`,
      lastName: `Achternaam is verplicht`,
      street: `Straat is vereist`,
      city: `Plaats is verplicht`,
      state: `Staat / Provincie is vereist`,
      postalCode: `Postcode is vereist`,
      country: `Land is vereist`,
      phone: `Telefoonnummer is vereist`,
      dob: `Geboortedatum is vereist`,
      general: `Zorg ervoor dat u hebt ingevuld alle velden en hierbij de juiste foto's`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Gebruikersnaam moet minimaal 3 tekens bevatten.`,
      compositionViolation: `Gebruikersnaam mag alleen cijfers en kleine letters bevatten.`,
      duplicationViolation: `Gebruikersnaam is al in gebruik`,
    },
    email: {
      compositionViolation: `Formaat van het e-maildres is onjuist`,
      duplicationViolation: `Dit e-mailadres is al in gebruik`,
    },
    pin: {
      lengthViolation: `Pincode moet minimaal 4 tekens bevatten.`,
      matchViolation: `Pincodes moeten overeenkomen.`,
      failedHashComparison: `Pincode is niet geldig, probeer het opnieuw.`,
      updateSuccess: `Uw pincode is bijgewerkt`,
      updateError: `Er is een fout opgetreden bij het bijwerken van uw pincode`,
    },
    mnemonic: {
      lengthViolation: `De geheugensteun moet minstens 12 woorden bevatten.`,
      unableToValidate: `De ingevoerde geheugensteun was niet geldig, probeer het opnieuw.`,
    },
    setNickname: {
      success: `Uw gebruikersnaam is opgeslagen.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Uw e-mailadres is opgeslagen.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `U moet uw pincode invoeren na`,
      bottom: `minuten van inactiviteit`,
      update: `Bijwerken`,
      error: `We waren niet in staat om uw accountinstellingen bij te werken`,
      success: `Lock timeout bijgewerkt`,
    },
    addFriend: {
      success: X => `Vriendschapsverzoek gestuurd naar @${X}`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Verwijderd uit vrienden: @${X} `,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    ethBalance: {
      display: Y => `Uw ETH saldo is ${String(Y).slice(0,8)}`,
      getError: `Kan Eth balans niet ophalen`,
      manage: `Beheer ETH`,
    },
    sendEth: {
      error: {
        insufficient: `U heeft niet genoeg ETH voor deze transactie`,
        generic: `Er is een fout opgetreden bij de overboeking, probeer het later opnieuw`,
        address: `Vul alstublieft een geldig adres in`,
        amount: `Vul alstublieft een bedrag in dat groter is dan 0`,
        limitExceeded: A => `U kunt maar ${CUR(A)}${TL(A)} per week versturen, kies een kleiner bedrag`
      },
      amount: `Hoeveelheid te versturen`,
      address: `Ontvangstadres (zonder voorvoegsel '0x')`,
      transfer: `Boek ETH over`,
      transferAll: `Boek alles over`,
      balance: Y => `Uw huidige ETH saldo is ${typeof Y === 'string'? Y.slice(0,8) : ''} `,
      ethAddress: `Ethereum Adres`,
      txCost: (B, A) => `De huidige transactie kost ${CUR(A)}${B}`,
      transferLowercase: `Boek ETH over`,
      note: A => `Let op: u kunt maar ${CUR(A)}${TL(A)} per week overboeken uit Lndr`,
      warning: (Z, A) => `U heeft ${CUR(A)}${Z} over van uw ${CUR(A)}${TL(A)} limiet`,
    },
    sendBcpt: {
      error: {
        insufficient: `U heeft niet genoeg BCPT voor deze transactie`,
        generic: `Er is een fout opgetreden bij de overboeking, probeer het later opnieuw`,
      },
      transfer: `Boek BCPT over`,
      address: `Ontvangstadres (zonder voorvoegsel '0x')`,
      balance: Y => `Uw huidige BCPT saldo is ${typeof Y === 'string'? Y.slice (0,8) : ''} `,
      bcptAddress: `BCPT Adres`,
    },
    panelHeaders: [
      `ETH (& BCPT) Adres`,
      `ETH saldo`,
      `BCPT saldo`,
      `Verwijder account`,
      `ETH transactiegeschiedenis`,
      `Inschakelen PayPal`,
      `Wijzig primaire valuta`,
      `Unlock Extra functies`,
      `Wijzig e-mailadres`,
      `Wijzig pincode`,
      `Wijzig Lock Timeout`,
      `Geheugensteun  `,
      `Notificaties`,
    ],
    viewEtherscan: `Bekijk Etherscan geschiedenis`,
    profilePic: {
      change: `Profielfoto veranderen`,
      setError: `Er is een fout opgetreden bij het uploaden van uw foto, probeer het later opnieuw`,
      getError: `Er is een fout opgetreden bij het ophalen van uw profielfoto`,
      setSuccess: `Profielfoto bijgewerkt`,
    },
    logoutSuccess: `U bent succesvol uitgelogd!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: {
    eth: `Uw huidige Eth saldo is:`,
    bcpt: `Uw huidige BCPT saldo is:`,
  },

  welcomeView: {
    by: `GEBOUWD DOOR`,
    makeItEasy: `Lndr maakt het gemakkelijk om eenvoudige schulden te volgen`,
    weHelpFriends: `Wij helpen vrienden samen te wonen, werken en spelen.`,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `Deel diner`,
    fillTank: `Vul uw tank`,
    travelTogether: `Samen reizen`,
    runEthereum: `We draaien op ETH!`,
    firstLendingApp: `De eerste mobiele kredietverleningsapp beveiligd met blockchain.`,
    greatConcert: `Zie een geweldig concert`,
    youPlayWithFriends: `U speelt met vrienden; \n wij houden de rekening bij...`,
    start: `Begin`,
  },

  walkthrough: {
    skip: `overspringen`,
    continue: `doorgaan met`,
    step1: {
      easyToUse: `Lndr is de makkelijkste manier om rekeningen, kosten delen te splitsen en te regelen eenvoudige schulden met vrienden en familie, alles gebeurt stevig op de blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Aan de slag met Lndr, moet u een vriend.`,
      friendsScreen: `Bezoek de Vrienden scherm te zoeken, toevoegen of uitnodigen uw vrienden en familie aan te sluiten op Lndr.`,
    },
    step3: {
      title: `Het opnemen van een Transactie`,
      easy: `Het splitsen van een rekening of het toevoegen van een schuld met een vriend is gemakkelijk in Lndr!`,
      selectFriend: `Kies je vriend, je valuta en het bedrag.`,
      addMemo: `Voeg wat noten in de memo in en klik op Verzenden.`,
    },
    step4: {
      title: `Betalen`,
      ready: `Klaar om te betalen?`,
      payPal: `Wanneer het tijd is om af te rekenen met Lndr, \n- U kunt kiezen PayPal:`,
      ether: `- cryptocurrencies zoals Ether:`,
      cash: `- of gewoon neem een ​​cash settlement:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Meerdere valuta`,
      multiCurrency: `Lndr kunt bijhouden van uw transacties, zelfs als ze toevallig in verschillende valuta's te houden.`,
      exchangeRate: `Wanneer u besluit om Up Settle met je vriend, zullen alle transacties worden omgezet in uw primaire valuta met behulp van de meest up-to-date wisselkoersen beschikbaar.`,
      start: `Start met behulp van Lndr!`,
    }
  },

  debtManagement: {
    shell: `Nieuwe transactie`,
    add: `Schuld toevoegen`,
    selectFriend: `Kies`,
    lend: `Nieuwe lening`,
    borrow: `Nieuwe schuld`,
    owesMe: `Is me`,
    iOwe: `Ik ben verschuldigd`,
    iLent: `Een vriend is me verschuldigd`,
    iBorrowed: `Ik ben verschuldigd aan een vriend`,
    settleUpLower: `Betalen`,
    amountToSettle: `Bedrag te betalen`,
    total: `Totaal`,
    record: `Document`,
    records: `Documentatie`,
    chooseCurrency: `Kies een valuta`,
    
    createError: {
      amountTooLow: `Het bedrag moet groter zijn dan $0`,
      amountTooHigh: `Het bedrag moet kleiner zijn dan $1.000.000.000`,
      selfAsFriend: `U kunt geen schulden maken met uzelf, kies een andere vriend`,
      pending: `Los alstublieft de openstaande transactie met deze gebruiker op voordat u een nieuwe aanmaakt`,
      insufficientEth: E => `U heeft minimaal ${E} ETH nodig om te betalen, ga naar Instellingen om uw saldo te zien`,
    },
    fields: {
      currency: `Valuta`,
      amount: `Bedrag`,
      settlementAmount: `Betalingsbedrag`,
      selectFriend: `Vriend`,
      memo: `Notitie`,
      direction: `Selecteer de juiste verklaring`,
    },
    memo: {
      example: `Typ notitie hier`,
    },
    direction: {
      lend: X => `${X} is mij verschuldigd`,
      borrow: X => `Ik ben ${X} verschuldigd`,
      initiatedLend: X => `${X} zegt dat hij/zij is mij verschuldigd`,
      initiatedBorrow: X => `${X} zegt dat u verschuldigd bent`,
      pendingLend: X => `@${X} is u verschuldigd`,
      pendingBorrow: X => `U bent verschuldigd @${X} `,
      pendingLendSettlement: S => `@${S.debtorNickname} vraagt ​​om een ​​betaling in ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} wil u betalen in ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `U verzocht om betaling aan @${S.debtorNickname} in ${S.settlementCurrency} `,
      pendingBorrowSettlementMe: S => `U heeft @${S.creditorNickname} verzocht te betalen in ${S.settlementCurrency} `,
    },
    pending: {
      success: F => `Openstaande schulden verstuurd aan @${F.nickname}`,
      error: generalCommunicationError
    },
    pendingParens: `(in behandeling)`,
    confirmation: {
      transaction: CP => `Transactie met ${CP} is succesvol bevestigd`,
      settlement: CP => `Betaling aan ${CP} is succesvol bevestigd`,
      error: `Kan de transactie niet bevestigen op dit moment, probeer het later opnieuw`,
    },
    rejection: {
      success: `Transactie is afgewezen`,
      error: `Kan de transactie niet afwijzen op dit moment, probeer het later opnieuw`,
    },
    balances: {
      error: `Kan saldi op dit moment niet laden, probeer het later opnieuw`,
    },
    for: M => `voor ${M}`,
    settleUp: `Betalen`,
    settleTotal: `Betaal totaal`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Betaling voor': 'Verzoek om te betalen voor'} ${A} `,
    recordSettleUpMemo: `Betalen`,
    balanceByCurrency: `Details`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Uw betaling aan ${X} is mislukt vanwege onvoldoende saldo`,
        generic: X => `Er is een fout opgetreden in de verwerking van uw betaling aan ${X} `,
      }
    },
    eth: `Betaal met ETH`,
    paypal: `Betaal met PayPal`,
    nonPayment: `Documenteer een betaling`,
    select: `Selecteer Betalingssoort`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Home`,
    friends: `Vrienden`,
    activity: `Activiteit`,
  },

  notifications: {
    toggleNotifications: `Wijzig notificaties`,
    enable: `Aanzetten`,
    disable: `Uitschakelen`,
  },

  pendingTransactionsLanguage: {
    shell: `Transactie in behandeling`,
    title: `In behandeling`,
    memo: `Notitie:`,
    for: `Voor`,
    none: `U heeft geen transacties in behandeling`,
    confirmationQuestion: `Bent u zeker dat u deze transactie wilt bevestigen?`,
    pendingAnnouncement: `Deze transactie wacht op bevestiging door de andere partij.`,
    bilateral: `Wachten op voltooien van de Eth overboeking`,
    confirm: `Bevestig`,
    reject: `Weiger transactie`,
    rejectRequest: `Wijs af`,
    cancel: `Annuleer transactie`,
    direction: {
      lend: (X, Z) => `@${X} is u ${Z} verschuldigd`,
      borrow: (X, Z) => `U bent @${X} ${Z} verschuldigd`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Betaling in behandeling`,
    title: `In behandeling`,
    none: `U heeft geen betalingen in behandeling`,
    confirm: `Bevestig`,
    reject: `Weiger betaling`,
    cancel: `Annuleer betaling`,
  },

  recentTransactionsLanguage: {
    title: `Voltooid`,
    none: `U heeft geen afgeronde transacties`,
    direction: {
      lend: (X, Z) => `@${X} is u ${Z} verschuldigd`,
      borrow: (X, Z) => `U bent @${X} ${Z} verschuldigd`
    },
    balance: `Saldo`,
    consolidatedBalance: `Saldo`,
    friends: FS => `(van ${FS} ${FS === 1 ? 'vriend': 'vrienden'})`,
  },

  tabs: {
    home: `Home `,
    friends: `Vrienden`,
    activity: `Activiteit`,
  },

  confirmation: {
    shell: `Bevestiging`,
    done: `Afgerond`,
    create: {
      start: `We hebben het document naar `,
      end: ` gestuurd ter bevestiging.`,
    },
    confirm: {
      start: ``,
      end: ` heeft dit document bevestigd.`,
    },
    reject: {
      start: `We hebben `,
      end: ` laten weten dat u dit document heeft geweigerd.`,
    },
    confirmFriend: {
      start: `U bent nu vrienden met `,
      end: `!`,
    },
    rejectFriend: {
      start: `U heeft de vriendschapsaanvraag van `,
      end: ` geweigerd.`,
    },
    rejectOutboundFriendRequest: {
      start: `U heeft de aanvraag voor een vriend te `,
      end: ` geannuleerd.`,
    },
    ethSent: {
      start: `U heeft succesvol `,
      end: ` ETH verzonden en uw transactiekenmerk is `,
    },
    bcptSent: {
      start: `U heeft succesvol `,
      end: ` BCPT verzonden en uw transactiekenmerk is `,
    },
    requestPayPalPayee: {
      start: `We hebben laten `,
      end: ` weten dat je zou willen om zich te vestigen met PayPal.`,
    },
    requestPayPalPayment: {
      start: `We hebben laten `,
      end: ` weten dat u wilt worden betaald met PayPal.`,
    },
    settledWithPayPal: {
      start: `We hebben laten `,
      end: ` weten dat je hebt verrekend met PayPal.`,
    },
    kycSuccess: {
      start: `Dank je! Uw account wordt geverifieerd.  
      
      `,
      end: `U ontvangt een melding wanneer uw extra functies worden ontgrendeld.` 
    },
    status: `U kunt de status van deze transactie zien in het `,
    activity: `tabblad activiteit.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Vriendschapsverzoek`,
    message: `Vriendschapsverzoeken`,
    request: F => `@${F} wil vrienden met u worden! `,
    outbound: F => `Je stuurde een vriend verzoek aan @${F} `,
  },

  privacyPolicy: {
    link: `lndr.io/terms/`,
    message: `Door te klikken, bevestigt u dat u het privacybeleid van Blockmason hebt gelezen en hiermee akkoord gaat. Blockmason kan uw e-mailadres gebruiken om updates over Blockmason en LNDR te verzenden. Hier is een link naar het privacybeleid:`
  },

  payPalLanguage: {
    connectPayPal: `Sluit PayPal`,
    connectSuccess: `PayPal ingeschakeld succes.`,
    disconnectPayPal: `Koppel PayPal los`,
    disconnected: `PayPal verbroken.`,
    requestPayPalPayment: `Verzoek PayPal Payment`,
    sendWithPayPal: `Stuur Met PayPal`,
    enablePayPal: `Inschakelen PayPal`,
    requestPayPalPayee: `Verzoek PayPal`,
    enablePayPalForFriend: F => `Inschakelt PayPal laat @${F} om je te betalen`,
    friendNotEnabled: F => `@${F} is niet ingeschakeld PayPal betalingen.`,
    friendRequestedConnect: F => `@${F} wil je betalen via PayPal`,
    requestFriendConnect: F => `Je vroeg @${F} om PayPal mogelijk te maken`,
    feesNotification: `Omvat niet PayPal kosten`,
    feesInformationHeader: `PayPal Fees Informatie`,
    feesInformation: `1. Uw PayPal-rekening moet worden gekoppeld aan een bankrekening.
    
2. Niet gratis in een andere valuta dan de valuta van uw bank zal oplopen een $ 0.35 kosten.
    
3. Internationale transfersommen:
    Verenigde Staten naar Canada / Europa: $ 2.99
    USA om ergens anders: $ 4.99
    
4. Deze kosten zijn niet volledig. Voor de meest actuele informatie ga naar:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afghanistan`, code: 'AFG' },
    { name: `Albanië`, code: 'ALB' },
    { name: `Algerije`, code: 'DZA' },
    { name: `Amerikaans Samoa`, code: 'ASM' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antarctica`, code: 'ATA' },
    { name: `Antigua en Barbuda`, code: 'ATG' },
    { name: `Argentinië`, code: 'ARG' },
    { name: `Armenië`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Australië`, code: 'AUS' },
    { name: `Oostenrijk`, code: 'AUT' },
    { name: `Azerbeidzjan`, code: 'AZE' },
    { name: `Bahamas`, code: 'BHS' },
    { name: `Bahrein`, code: 'BHR' },
    { name: `Bangladesh`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Wit-Rusland`, code: 'BLR' },
    { name: `België`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermuda`, code: 'BMU' },
    { name: `Bhutan`, code: 'BTN' },
    { name: `Bolivia`, code: 'BOL' },
    { name: `Bosnië-Herzegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brazilië`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgarije`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Boeroendi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Cambodja`, code: 'KHM' },
    { name: `Kameroen`, code: 'CMR' },
    { name: `Canada`, code: 'CAN' },
    { name: `Kaaiman Eilanden`, code: 'CYM' },
    { name: `Centraal Afrikaanse Republiek`, code: 'CAF' },
    { name: `Tsjaad`, code: 'TCD' },
    { name: `Chili`, code: 'CHL' },
    { name: `China`, code: 'CHN' },
    { name: `Colombia`, code: 'COL' },
    { name: `Comoren`, code: 'COM' },
    { name: `Congo`, code: 'COG' },
    { name: `Congo`, code: 'COD' },
    { name: `Cook eilanden`, code: 'COK' },
    { name: `Costa Rica`, code: 'CRI' },
    { name: `Côte d'Ivoire`, code: 'CIV' },
    { name: `Kroatië`, code: 'HRV' },
    { name: `Cuba`, code: 'CUB' },
    { name: `Curacao`, code: 'CUW' },
    { name: `Cyprus`, code: 'CYP' },
    { name: `Tsjechië`, code: 'CZE' },
    { name: `Denemarken`, code: 'DNK' },
    { name: `Djibouti`, code: 'DJI' },
    { name: `Dominica`, code: 'DMA' },
    { name: `Dominicaanse Republiek`, code: 'DOM' },
    { name: `Ecuador`, code: 'ECU' },
    { name: `Egypte`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Equatoriaal-Guinea`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Estland`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Ethiopië`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finland`, code: 'FIN' },
    { name: `Frankrijk`, code: 'FRA' },
    { name: `Frans-Guyana`, code: 'GUF' },
    { name: `Frans-Polynesië`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambia`, code: 'GMB' },
    { name: `Georgië`, code: 'GEO' },
    { name: `Duitsland`, code: 'DEU' },
    { name: `Ghana`, code: 'GHA' },
    { name: `Gibraltar`, code: 'GIB' },
    { name: `Griekenland`, code: 'GRC' },
    { name: `Groenland`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Guinee-Bissau`, code: 'GNB' },
    { name: `Guyana`, code: 'GUY' },
    { name: `Haïti`, code: 'HTI' },
    { name: `Vaticaan`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hong Kong`, code: 'HKG' },
    { name: `Hongarije`, code: 'HUN' },
    { name: `IJsland`, code: 'ISL' },
    { name: `Indië`, code: 'IND' },
    { name: `Indonesië`, code: 'IDN' },
    { name: `Ik rende`, code: 'IRN' },
    { name: `Irak`, code: 'IRQ' },
    { name: `Ierland`, code: 'IRL' },
    { name: `Isle of Man`, code: 'IMN' },
    { name: `Israël`, code: 'ISR' },
    { name: `Italië`, code: 'ITA' },
    { name: `Jamaica`, code: 'JAM' },
    { name: `Japan`, code: 'JPN' },
    { name: `Jordanië`, code: 'JOR' },
    { name: `Kazachstan`, code: 'KAZ' },
    { name: `Kenia`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Korea (Noord-Korea)`, code: 'PRK' },
    { name: `Korea (ROK)`, code: 'KOR' },
    { name: `Koeweit`, code: 'KWT' },
    { name: `Kirgizië`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Letland`, code: 'LVA' },
    { name: `Libanon`, code: 'LBN' },
    { name: `Lesotho`, code: 'LSO' },
    { name: `Liberia`, code: 'LBR' },
    { name: `Libië`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `Litouwen`, code: 'LTU' },
    { name: `Luxemburg`, code: 'LUX' },
    { name: `Macao`, code: 'MAC' },
    { name: `Macedonië`, code: 'MKD' },
    { name: `Madagascar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Maleisië`, code: 'MYS' },
    { name: `Maldiven`, code: 'MDV' },
    { name: `Mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Marshall eilanden`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritanië`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Mexico`, code: 'MEX' },
    { name: `Micronesië`, code: 'FSM' },
    { name: `Moldavië`, code: 'MDA' },
    { name: `Monaco`, code: 'MCO' },
    { name: `Mongolië`, code: 'MNG' },
    { name: `Montenegro`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Marokko`, code: 'MAR' },
    { name: `Mozambique`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namibië`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `Nederland`, code: 'NLD' },
    { name: `Nieuw-Caledonië`, code: 'NCL' },
    { name: `Nieuw Zeeland`, code: 'NZL' },
    { name: `Nicaragua`, code: 'NIC' },
    { name: `Niger`, code: 'NER' },
    { name: `Nigeria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `noordelijke Mariana eilanden`, code: 'MNP' },
    { name: `Noorwegen`, code: 'NOR' },
    { name: `Oman`, code: 'OMN' },
    { name: `Pakistan`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestina`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Papoea-Nieuw-Guinea`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Filippijnen`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Polen`, code: 'POL' },
    { name: `Portugal`, code: 'PRT' },
    { name: `Puerto Rico`, code: 'PRI' },
    { name: `Katar`, code: 'QAT' },
    { name: `Bijeenkomst`, code: 'REU' },
    { name: `Roemenië`, code: 'ROU' },
    { name: `Russische Federatie`, code: 'RUS' },
    { name: `Rwanda`, code: 'RWA' },
    { name: `Saint Barthélemy`, code: 'BLM' },
    { name: `Sint-Helena`, code: 'SHN' },
    { name: `Saint Kitts en Nevis`, code: 'KNA' },
    { name: `Saint Lucia`, code: 'LCA' },
    { name: `Sint-Maarten`, code: 'MAF' },
    { name: `Saint-Pierre en Miquelon`, code: 'SPM' },
    { name: `Saint Vincent en de Grenadines`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Sao Tome en Principe`, code: 'STP' },
    { name: `Saoedi-Arabië`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Servië`, code: 'SRB' },
    { name: `Seychellen`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapore`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Slowakije`, code: 'SVK' },
    { name: `Slovenië`, code: 'SVN' },
    { name: `Solomon eilanden`, code: 'SLB' },
    { name: `Somalië`, code: 'SOM' },
    { name: `Zuid-Afrika`, code: 'ZAF' },
    { name: `Zuid Soedan`, code: 'SSD' },
    { name: `Spanje`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Soedan`, code: 'SDN' },
    { name: `Suriname`, code: 'SUR' },
    { name: `Zweden`, code: 'SWE' },
    { name: `Zwitserland`, code: 'CHE' },
    { name: `Syrische Arabische Republiek`, code: 'SYR' },
    { name: `Taiwan`, code: 'TWN' },
    { name: `Tadzjikistan`, code: 'TJK' },
    { name: `Tanzania`, code: 'TZA' },
    { name: `Thailand`, code: 'THA' },
    { name: `Timor-Leste`, code: 'TLS' },
    { name: `Gaan`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad en Tobago`, code: 'TTO' },
    { name: `Tunesië`, code: 'TUN' },
    { name: `Turkije`, code: 'TUR' },
    { name: `Turkmenistan`, code: 'TKM' },
    { name: `Turks- en Caicoseilanden`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Oeganda`, code: 'UGA' },
    { name: `Oekraïne`, code: 'UKR' },
    { name: `Verenigde Arabische Emiraten`, code: 'ARE' },
    { name: `Verenigd Koningkrijk`, code: 'GBR' },
    { name: `de Verenigde Staten van Amerika`, code: 'USA' },
    { name: `Kleine afgelegen eilanden van de Verenigde Staten`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Oezbekistan`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Viet Nam`, code: 'VNM' },
    { name: `Britse Maagdeneilanden`, code: 'VGB' },
    { name: `Amerikaanse Maagdeneilanden`, code: 'VIR' },
    { name: `Westelijke Sahara`, code: 'ESH' },
    { name: `Jemen`, code: 'YEM' },
    { name: `Zambia`, code: 'ZMB' },
    { name: `Zimbabwe`, code: 'ZWE' },
  ]
}
