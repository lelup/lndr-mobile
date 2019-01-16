import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Tällä hetkellä palvelimeen ei saada yhteyttä, yritä myöhemmin uudelleen.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Hei maailma`,
  noConnection: `Ei yhteyttä`,
  retry: `Yritä uudelleen`,
  submit: `LÄHETÄ`,
  next: `Seuraava`,
  cancel: `Peruuta`,
  back: `Palaa takaisin`,
  copy: `Kopioi leikepöydälle`,
  confirmAccount: `Vahvista`,
  createAccount: `Luo tili`,
  recoverAccount: `Palauta tili`,
  removeAccount: `Poista tili`,
  updateAccount: `Päivitä tili`,
  loginAction: `Avaa`,
  enterPin: `SYÖTÄ PIN-KOODISI`,
  changePin: `Muuta PIN-koodisi`,
  enterCurrentPin: `Syötä nykyinen PIN-koodisi`,
  logoutAction: `KIRJAUDU ULOS`,
  seeAllActivity: `Katso kaikki tapahtumat`,
  copiedClipboard: `Kopioitu leikepöydälle`,
  pleaseWait: `Odota`,
  addFriend: `Lisää ystävä`,
  addFriendConfirmationQuestion: `Oletko varma, että haluat lisätä tämän käyttäjän ystäväksi?`,
  removeFriend: `Poista ystävä`,
  currentFriends: `Nykyiset ystävät`,
  removeFriendConfirmationQuestion: `Oletko varma, että haluat poistaa tämän käyttäjän ystävistäsi?`,
  inviteFriends: `Kutsu ystäviäsi käyttämään Lndr-sovellusta`,
  tryLndr: `Kokeile Lndr-sovellusta tässä:`,
  friendInfo: `Lisätietoja tästä ystäväsuhteesta:`,
  noFriends: `Aloita lisäämällä ystäviä!`,
  noMatches: `Sopivaa käyttäjää ei löydy`,
  noBalances: `Sinulla ei ole tallennettuja velkoja`,
  addFriendButton: `Lisää ystävä`,
  alreadyFriendsButton: `Ystävät`,
  friendShell: `Ystävä`,
  tip: `Vinkki:`,
  notice: `Ilmoitus:`,
  welcome: `Tervetuloa LNDR-maailmaasi`,
  noBalanceWarning: `Emme pystyneet lataamaan saldoasi tällä hetkellä, yritä myöhemmin uudelleen.`,
  totalBalance: `Kokonaissaldo:`,
  totalBalances: `Kaikki vastapuolet:`,
  newTransaction: `Uusi tapahtuma`,
  needsReview: `Odottaa hyväksyntää`,
  owesMe: `Minulle ollaan velkaa `,
  iOwe: `Olen velkaa muille`,
  newPassword: `Uusi salasana (vähintään 8 merkkiä)`,
  confirmPassword: `Vahvista salasana`,
  newPin: `Uusi 4-numeroinen PIN-koodisi`,
  enterNewPin: `LUO UUSI 4-NUMEROINEN PIN-KOODISI`,
  confirmPin: `VAHVISTA PIN-KOODISI`,
  newAccount: `Luo uusi tili`,
  loginAccount: `Avaa tilisi`,
  recoverExistingAccount: `Palauta olemassa oleva tili`,
  recoverMnemonic: `Muistisääntö (12 sanaa on näkyvissä, kun luot tilin)`,
  recoverMnemonicLengthError: `Muistisäännön pitäisi sisältää täsmälleen 12 sanaa`,
  successTitle: `Menestys`,
  errorTitle: `Virhe`,
  showMnemonic: `Näytä 12-sanainen muistisääntö`,
  mnemonicExhortation: `Sinulta vaaditaan tämä 12-sanainen lause, kun haluat palauttaa tilisi - pidä se turvassa ja salassa muilta`,
  addressExhortation: `Voit lähettää ETH tai tuettuja ERC-20 poletin lompakon osoite.`,
  removeAccountTitle: `Oletko varma, että haluat poistaa tilisi tältä laitteelta?`,
  removeAccountExhortation: `Varmista, että sinulla on pääsy muistisääntöön joka tarvitaan tilisi palauttamiseksi, sillä tämä toiminto poistaa tilisi pysyvästi  tältä laitteelta.`,
  myAccount: `Tilini`,
  setNickname: `Luo käyttäjänimi, jolla ystäväsi voi hakea sinua `,
  setEmail: `Syötä sähköpostiosoite, johon voit saada tietoja Lndr-päivityksistä`,
  nickname: `Käyttäjänimi (pieniä kirjaimia ja numeroita)`,
  email: `Sähköpostiosoite`,
  inviteLink: `Kutsulinkki`,
  sendToAddress: `Lähetä osoitteeseen`,
  splitExpense: `Split kustannuksella kanssani LNDR sovellus`,
  sendInvite: `Lähetä sähköpostitse tai tekstiä`,
  unknownTransaction: `tuntematon Transaction`,
  yourFriend: `ystäväsi`,
  lndrVerified: {
    ok: `kunnossa`,
    title: `Korkeampia ratkaisun raja ja salauksen peruuttamista määriä täyttämällä Tunne asiakkaiden vaatimuksiin.`,
    statusTitle: `Nykyisen tilan tarkastus on:`,
    tryAgain: `Emme pystyneet vahvistamaan henkilöllisyytesi. Lähetä tietosi ja varmistaa, että kuvat ovat luettavissa.`,
    formMessage: `Täytä kaikki seuraavat kentät`,
    button: `Vahvista henkilöllisyytesi`,
    prefix: `Lue `,
    linkTitle: `tietosuojakäytäntömme `,
    postfix: `miten henkilökohtaisia ​​tietoja hallitaan.`,
    upload: `Lataa valtion `,
    governmentId: `myöntämä henkilöllisyystodistus`,
    selfie: `Lataa selfien kanssa valtion myöntämä henkilöllisyystodistus`,
    proofOfAddress: `Todiste osoitteesta`,
    ifNotId: `(Jos ei tunnus)`,
    agree: `Olen lukenut ja hyväksyn `,
    agreeLink: `Privacy Policy`,
    success: `KYC on toimitettu.`,
    idInfoHeader: `Esimerkkejä ID ovat:`,
    passport: `Passi`,
    drivers: `Ajokortti`,
    national: `Kansallinen henkilöllisyyskortti`,
    addressInfoHeader: `Esimerkkejä todiste osoitteesta:`,
    bank: `Tiliote`,
    utility: `sähkölaskun`,
    other: `muu asiakirja`,
    chooseGovernmentPhoto: `Valitse hallitus ID-kuva`,
    chooseSelfiePhoto: `Valitse Selfie Photo`,
    chooseAddressPhoto: `Valitse todiste osoitteesta Photo`,
    emailRequired: `Tarvitset sähköpostia henkilöllisyytesi vahvistamiseksi, klikkaa "Muuta sähköpostiosoitteesi"`,
    approved: `HYVÄKSYTTY`,
    rejected: `HYLÄTTY`,
    pending: `Odotustilassa`,
    error: generalCommunicationError,
    formFields: {
      firstName: `Etunimi`,
      lastName: `Sukunimi`,
      street: `Katuosoite`,
      city: `Kaupunki`,
      state: `Valtio / kunta`,
      postalCode: `postinumero`,
      country: `Valitse maa`,
      phone: `Puhelinnumero`,
      dob: `Syntymäaika (VVVV-KK-PP)`,
    },
    formErrors: {
      firstName: `Etunimi on pakollinen`,
      lastName: `Sukunimi on pakollinen`,
      street: `Street vaaditaan`,
      city: `Kaupunki on pakollinen`,
      state: `Valtio / kunta vaaditaan`,
      postalCode: `Postinumero on pakollinen`,
      country: `Maa on pakollinen`,
      phone: `Puhelinnumero on pakollinen`,
      dob: `Syntymäaika tarvitaan`,
      general: `Varmista, että olet täyttänyt kaikki kentät ja kiinnitetty oikeaan kuvat`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Käyttäjänimen pitäisi sisältää vähintään 3 merkkiä.`,
      compositionViolation: `Käyttäjänimi voi sisältää vain numeroita ja pikkukirjaimia.`,
      duplicationViolation: `Tämä käyttäjänimi on jo varattu`,
    },
    email: {
      compositionViolation: `Sähköpostiosoitteen muoto on virheellinen`,
      duplicationViolation: `Tämä sähköpostiosoite on jo käytössä`,
    },
    pin: {
      lengthViolation: `PIN-koodin pitäisi olla vähintään 4 merkkiä.`,
      matchViolation: `PIN-koodien pitäisi olla identtisiä.`,
      failedHashComparison: `Valitsemasi PIN-koodi ei kelpaa, yritä uudelleen.`,
      updateSuccess: `PIN-koodisi on päivitetty`,
      updateError: `PIN-koodin päivittämisen yhteydessä on tapahtunut virhe`,
    },
    mnemonic: {
      lengthViolation: `Muistisäännön pitäisi sisältää vähintään 12 sanaa.`,
      unableToValidate: `Valitsemasi muistisääntö ei kelpaa, yritä uudelleen.`,
    },
    setNickname: {
      success: `Käyttäjänimesi on tallennettu.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `Sähköpostiosoitteesi on tallennettu.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `Sinun on syötettävä PIN-koodisi uudelleen, kun on kulunut`,
      bottom: `minuuttia ilman toimintaa`,
      update: `Päivitä`,
      error: `Emme voineet päivittää tilisi asetuksia`,
      success: `Lukituksen aika-asetukset on päivitetty`,
    },
    addFriend: {
      success: X => `Ystäväpyyntö lähetetty @${X}:lle`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `Poistettu ystävistä: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `Emme pystyneet hakea Eth-saldoa`,
      manage: `Hallitse ETH:ta`,
    },
    sendEth: {
      error: {
        insufficient: `Sinulla ei ole tarpeeksi ETH:tä tämän tapahtuman toteuttamiseksi`,
        generic: `Siirron yhteydessä on tapahtunut virhe, yritä myöhemmin uudelleen`,
        address: `Syötä kelvollinen osoite`,
        amount: `Anna summa, joka on suurempi kuin 0`,
        limitExceeded: (A, M) => `Voit lähettää vain ${CUR(A)} ${TL(A, M)} viikossa, valitse pienempi summa`
      },
      amount: `Lähetettävä summa`,
      address: `Kohdeosoite`,
      transfer: `Siirrä ETH`,
      transferAll: `Siirrä kaikki`,
      balance: Y => `Nykyinen ETH-saldosi on ${typeof Y === 'string' ? Y.slice (0,8): ''} `,
      ethAddress: `Ethereum-osoite`,
      transferLowercase: `Siirrä Eth`,
      note: (A, M) => `Huom.: Voit siirtää Lndr-sovelluksesta vain ${CUR(A)} ${TL(A, M)} viikossa`,
      warning: (Z, A, M) => `Sinulla on jäljellä ${CUR(A)} ${Z}, ennen kuin saavutat ${CUR(A)} ${TL(A, M)} ylärajasi`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `Sinulla ei ole tarpeeksi ${name}:tä tämän tapahtuman toteuttamiseksi`,
        generic: `Siirron yhteydessä on tapahtunut virhe, yritä myöhemmin uudelleen`,
      },
      transfer: (name) => `Siirrä ${name}`,
      address: `Kohdeosoite`,
      balance: (name, balance) => `Nykyinen ${name}-saldosi on ${typeof balance === 'string' ? balance.slice (0,8): ''} `,
      tokenAddress: (name) => `${name}-Osoite`,
      txCost: (ethCost, currencyCost) => `Tapahtumakustannukset: ${ethCost} ETH (${currencyCost})`,
    },
    panelHeaders: [
      `Lompakko Osoite`,
      `Poista tili`,
      `ETH-tapahtumahistoria`,
      `Ota PayPal`,
      `Muuta päävaluutta`,
      `Lukituksen Lisäominaisuudet`,
      `Muuta sähköpostiosoitteesi`,
      `Muuta PIN-koodisi`,
      `Muuta lukituksen aika-asetukset`,
      `Muistisääntö`,
      `Ilmoitukset`,
    ],
    viewEtherscan: `Näytä Etherscan-tapahtumahistoriaa`,
    profilePic: {
      change: `Vaihda profiilikuva`,
      setError: `Kuvan lataamisen yhteydessä on tapahtunut virhe, yritä myöhemmin uudelleen`,
      getError: `Profiilikuvan noudattamisen yhteydessä on tapahtunut virhe, yritä myöhemmin uudelleen`,
      setSuccess: `Profiilikuva on päivitetty`,
    },
    logoutSuccess: `Olet onnistuneesti kirjautunut ulos!`,
    logoutError: generalCommunicationError,
    addressWarning: `Manuaalisesti syöttämällä osoite tulee välttää. Niin omalla vastuullasi. Emme ole vastuussa misaddressed tai kadonnut siirtoja.`,
  },

  currentBalance: name => `Nykyinen ${name}-saldosi on`,

  welcomeView: {
    by: `TEKIJÄ:`,
    makeItEasy: `Lndr-sovelluksen avulla on helppo seurata yksinkertaisia ​​velkoja`,
    weHelpFriends: `Autamme ystäviämme elämään, työskentelemään ja pelaamaan `,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `Jaa illallisesi`,
    fillTank: `Täytä bensatankkisi`,
    travelTogether: `Matkusta ystävien kanssa`,
    runEthereum: `Me toimimme ETH:lla!`,
    firstLendingApp: `Ensimmäinen mobiili lainasovellus, joka hyödyntää blockchain-teknologiaa.`,
    greatConcert: `Käy katsomassa upeata konserttia`,
    youPlayWithFriends: `Vietät aikaa ystäviesi kanssa; \ ja me pidämme laskua silmällä….`,
    start: `Aloita`,
  },

  walkthrough: {
    skip: `hyppiä`,
    continue: `jatkaa`,
    step1: {
      easyToUse: `Lndr on helpoin tapa jakaa laskut, jakaa kulut ja asettua yksinkertainen velat ystävien ja perheen kanssa, kaikki tehty tukevasti blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Päästä alkuun Lndr, sinun täytyy lisätä kaverin.`,
      friendsScreen: `Käy Ystävät näytön etsiä, lisää tai kutsu ystäväsi ja perheesi kytkeä päälle Lndr.`,
    },
    step3: {
      title: `Nauhoittaminen Transaction`,
      easy: `Halkaisu laskun tai lisäämällä velkaa ystävän kanssa on helppoa Lndr!`,
      selectFriend: `Valitse ystäväsi, sinun valuuttaa ja määrää.`,
      addMemo: `Lisää noin muistiinpanoja muistio ruutuun ja valitse Lähetä.`,
    },
    step4: {
      title: `Sovi velan maksamisesta`,
      ready: `Valmis sovi velan maksamisesta?`,
      payPal: `Kun on aika asettua kanssa Lndr, \n- Voit valita PayPal:`,
      ether: `- cryptocurrencies kuten eetteri:`,
      cash: `- tai yksinkertaisesti tallentaa käteissuorituksen:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Moni-valuuttainen`,
      multiCurrency: `Lndr voi pitää kirjaa liiketoimista, vaikka ne tapahtuvat eri valuutoissa.`,
      exchangeRate: `Kun päätät sopia maksamisesta ystäväsi kanssa, kaikki liiketoimet muunnetaan ensisijaiselta valuutaksi parhaiten ajan tasalla valuuttakursseja.`,
      start: `Aloita Lndr!`,
    }
  },

  debtManagement: {
    shell: `Uusi tapahtuma`,
    add: `Lisää velka`,
    selectFriend: `Valitse`,
    lend: `Uusi laina`,
    borrow: `Uusi velka`,
    owesMe: `Minulle velkaa`,
    iOwe: `Olen velkaa`,
    iLent: `Ystävä on minulle velkaa`,
    iBorrowed: `Olen velkaa ystävälle`,
    settleUpLower: `Sovi velan maksamisesta`,
    amountToSettle: `Maksettava summa`,
    total: `Yhteissumma`,
    record: `merkintä`,
    records: `merkinnät`,
    chooseCurrency: `Valitse valuutta`,

    createError: {
      amountTooLow: `Summan on oltava suurempi kuin $ 0`,
      amountTooHigh: `Summan on oltava alle $ 1000000000`,
      selfAsFriend: `Et voi olla velkaa itsellesi, valitse toinen ystävä`,
      pending: `Suorita loppuun odotustilassa oleva tapahtuma, joka on sinun ja tämän käyttäjän välillä ennen uuden tapahtuman luomista`,
      insufficientEth: E => `Tarvitset vähintään ${E} ETH:ta velan maksamiseen, näet saldosi Asetuksista.`,
    },
    fields: {
      currency: `Valuutta`,
      amount: `Summa`,
      settlementAmount: `Maksettava summa`,
      selectFriend: `Ystävä`,
      memo: `Muistio`,
      direction: `Valitse oikea tiliote`,
    },
    memo: {
      example: `Kirjoita muistiosi tähän`,
    },
    direction: {
      lend: X => `${X} on velkaa minulle`,
      borrow: X => `olen velkaa ${X}:lle`,
      initiatedLend: X => `${X} sanoo, että hän on velkaa`,
      initiatedBorrow: X => `${X} sanoo, että olen velkaa hänelle`,
      pendingLend: X => `@${X} on velkaa sinulle`,
      pendingBorrow: X => `Sinä olet velkaa @${X}:lle`,
      settlement: settlement => `${settlement.settlementCurrency} Settlement`,
      pendingLendSettlement: S => `@${S.debtorNickname} pyytää, että maksat tässä valuutassa: ${S.settlementCurrency}`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} haluaa maksaa sinulle tässä valuutassa: ${S.settlementCurrency}`,
      pendingLendSettlementMe: S => `Halusit maksaa velkasi @${S.debtorNickname}:lle tässä valuutassa: ${S.settlementCurrency}`,
      pendingBorrowSettlementMe: S => `Pyysit, että @${S.creditorNickname} maksaa sinulle velkansa tässä valuutassa: ${S.settlementCurrency}`,
    },
    pending: {
      success: F => `Odotustilassa olevat velat, jotka on toimitettu @${F.nickname}:lle`,
      error: generalCommunicationError
    },
    pendingParens: `(Odotustilassa)`,
    confirmation: {
      transaction: CP => `Tapahtuma ${CP}:n kanssa on vahvistettu`,
      settlement: CP => `Velan maksu  ${CP}:lle on vahvistettu`,
      error: `Emme voineet vahvistaa tapahtumaa tällä hetkellä, yritä myöhemmin uudelleen`,
    },
    rejection: {
      success: `Tapahtuma on hylätty`,
      error: `Emme voineet hylätä tapahtumaa tällä hetkellä, yritä myöhemmin uudelleen`,
    },
    balances: {
      error: `Emme voineet ladata saldoja tällä hetkellä, yritä myöhemmin uudelleen`,
    },
    for: M => `tarkoittaa ${M}`,
    settleUp: `Sovi velan maksamisesta`,
    settleTotal: `Maksettavien velkojen kokonaissumma`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Maksetaan velkaa' : 'Pyydetään velan maksua summasta'} ${A}`,
    recordSettleUpMemo: `Maksetaan velka`,
    balanceByCurrency: `Yksityiskohdat`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `Velan maksu ${X}:lle epäonnistui, koska tililläsi olevat varat eivät riitä`,
        generic: X => `Tapahtui virhe, kun yritit maksaa velkasi ${X}:lle`
      }
    },
    eth: `Maksa velkasi ETHlla:`,
    erc20: name => `Settle with ${name}`,
    paypal: `Maksa velkasi PAYPALlla:`,
    nonPayment: `Kirjaa maksu`,
    select: `Valitse maksujen tyyppi`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Koti`,
    friends: `Ystävät`,
    activity: `Tapahtumat`,
  },

  notifications: {
    toggleNotifications: `Toggle-ilmoitukset`,
    enable: `Kytke päälle`,
    disable: `Kytke pois päältä`,
  },

  pendingTransactionsLanguage: {
    shell: `Odotustilassa oleva tapahtuma`,
    title: `Odotustilassa`,
    memo: `Muistio:`,
    for: `varten`,
    none: `Sinulla ei ole odotustilassa olevia tapahtumia`,
    confirmationQuestion: `Oletko varma, että haluat vahvistaa tämän tapahtuman?`,
    pendingAnnouncement: `Toinen osapuoli odottaa tämän tapahtuman vahvistusta.`,
    bilateral: `Odotetaan, että siirto on saatu loppuun`,
    confirm: `Vahvista`,
    reject: `Hylkää tapahtuma`,
    rejectRequest: `Hylkää`,
    cancel: `Peruuta tapahtuma`,
    direction: {
      lend: (X, Z) => `@${X} on velkaa sinulle ${Z}`,
      borrow: (X, Z) => `Sinä olet velkaa @${X} ${Z}:lle`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Odotustilassa oleva maksu`,
    title: `Odotustilassa`,
    none: `Sinulla ei ole odotustilassa olevia maksuja`,
    confirm: `Vahvista`,
    reject: `Hylkää maksu`,
    cancel: `Peruuta maksu`,
  },

  recentTransactionsLanguage: {
    title: `Valmis`,
    none: `Sinulla ei ole loppuun suoritettuja tapahtumia`,
    direction: {
      lend: (X, Z) => `@${X} on velkaa sinulle ${Z}`,
      borrow: (X, Z) => `Sinä olet velkaa @${X} ${Z}:lle`,
    },
    balance: `Saldo`,
    consolidatedBalance: `Saldo`,
    friends: FS => `(alkaen ${FS} ${FS === 1? 'Ystävä': 'ystävät'})`,
  },

  tabs: {
    home: `Koti `,
    friends: `Ystävät`,
    activity: `Tapahtumat`,
  },

  confirmation: {
    shell: `Vahvistus`,
    done: `Tehty`,
    create: {
      start: `Olemme lähettäneet merkinnän `,
      end: ` vahvistettavaksi.`,
    },
    confirm: {
      start: `Olet vahvistanut tämän `,
      end: ` saadun merkinnän.`,
    },
    reject: {
      start: `Olemme ilmoittaneet `,
      end: `, että olet hylännyt tämä merkinnän.`,
    },
    confirmFriend: {
      start: `Sinä ja `,
      end: ` olette nyt ystäviä!`,
    },
    rejectFriend: {
      start: `Olet hylännyt `,
      end: ` ystäväpyynnön.`,
    },
    rejectOutboundFriendRequest: {
      start: `Olet peruuttanut ystävä pyynnön `,
      end: `.`,
    },
    ethSent: {
      start: `Olet onnistuneesti lähettänyt `,
      end: ` ETH:ta ja tapahtumasi tunnusnumero on `,
    },
    erc20Sent: {
      start: `Olet onnistuneesti lähettänyt `,
      end: `:tä ja tapahtumasi tunnusnumero on `,
    },
    requestPayPalPayee: {
      start: `Olemme ilmoittaneet `,
      end: ` tietää, että haluat asettua PayPal.`,
    },
    requestPayPalPayment: {
      start: `Olemme ilmoittaneet `,
      end: ` tietää, että haluat maksaa PayPal.`,
    },
    settledWithPayPal: {
      start: `Olemme ilmoittaneet `,
      end: ` tietää, että olet ratkaistaan ​​PayPal.`,
    },
    kycSuccess: {
      start: `Kiitos! Tilisi on todennettavissa.

      `,
      end: `Saat ilmoituksen, kun lisäominaisuuksia ovat lukitsematta.`
    },
    status: `Tämän tapahtuman tila `,
    activity: `näkyy tapahtumavalikossa.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Ystäväpyyntö`,
    message: `Ystäväpyynnöt`,
    request: F => `@${F} haluaa olla ystäväsi! `,
    outbound: F => `Olet lähettänyt ystävä pyynnön @${F}`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `Klikkaamalla alla olevaa linkkiä vahvistaa, että olet lukenut ja hyväksynyt Blockmason-tietosuojakäytännön. Blockmason voi käyttää sähköpostiosoitteesi lähettää päivityksiä Blockmason ja LNDR. Tässä on linkki tietosuojakäytäntöön:`,
  },

  payPalLanguage: {
    connectPayPal: `Yhdistä PayPal`,
    connectSuccess: `PayPal käytössä onnistuneesti.`,
    disconnectPayPal: `Katkaise PayPal`,
    disconnected: `PayPal irrotettu.`,
    requestPayPalPayment: `Pyydä PayPal`,
    sendWithPayPal: `Send PayPalin`,
    enablePayPal: `Ota PayPal`,
    requestPayPalPayee: `Pyydä PayPal`,
    enablePayPalForFriend: F => `ottaminen PayPalin avulla @${F} maksaa you.`,
    friendNotEnabled: F => `@${F} ei käytössä PayPal maksut.`,
    friendRequestedConnect: F => `@${F} haluaa maksaa sinulle kautta PayPal`,
    requestFriendConnect: F => `Kysyit @${F} jotta PayPal`,
    feesNotification: `Ei sisällä PayPal maksut`,
    feesInformationHeader: `PayPal maksut Tietoja`,
    feesInformation: `1. PayPal-tili on sidottava pankkitilille.
    
2. Ottaen valuutassa eri pankista valuutta aiheutuu $ 0.35 maksu.

3. Kansainvälinen siirtomaksut:
    Yhdysvalloista Kanadaan / Eurooppa: $ 2.99
    USA missään muualla: $ 4.99

4. Nämä maksut eivät ole kattavia. Saat päivitetyt tiedot osoitteessa:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afganistan`, code: 'AFG' },
    { name: `Albania`, code: 'ALB' },
    { name: `Algeria`, code: 'DZA' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angola`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antarktis`, code: 'ATA' },
    { name: `Antigua ja Barbuda`, code: 'ATG' },
    { name: `Argentiina`, code: 'ARG' },
    { name: `Armenia`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Australia`, code: 'AUS' },
    { name: `Itävalta`, code: 'AUT' },
    { name: `azerbaijan`, code: 'AZE' },
    { name: `Bahama`, code: 'BHS' },
    { name: `Bahrain`, code: 'BHR' },
    { name: `Bangladesh`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Valko-Venäjä`, code: 'BLR' },
    { name: `Belgia`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `bermuda`, code: 'BMU' },
    { name: `Bhutan`, code: 'BTN' },
    { name: `Bolivia`, code: 'BOL' },
    { name: `Bosnia ja Hertsegovina`, code: 'BIH' },
    { name: `Botswana`, code: 'BWA' },
    { name: `Brasilia`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgaria`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Kap Verde`, code: 'CPV' },
    { name: `Kambodza`, code: 'KHM' },
    { name: `Kamerun`, code: 'CMR' },
    { name: `Kanada`, code: 'CAN' },
    { name: `Caymansaaret`, code: 'CYM' },
    { name: `Keski-Afrikan tasavalta`, code: 'CAF' },
    { name: `Chad`, code: 'TCD' },
    { name: `Chile`, code: 'CHL' },
    { name: `Kiina`, code: 'CHN' },
    { name: `Kolumbia`, code: 'COL' },
    { name: `Komorit`, code: 'COM' },
    { name: `Kongo`, code: 'COG' },
    { name: `Kongo`, code: 'COD' },
    { name: `Cook saaret`, code: 'COK' },
    { name: `Costa Ricassa`, code: 'CRI' },
    { name: `Norsunluurannikko`, code: 'CIV' },
    { name: `Kroatia`, code: 'HRV' },
    { name: `Kuuba`, code: 'CUB' },
    { name: `Curaçao`, code: 'CUW' },
    { name: `Kypros`, code: 'CYP' },
    { name: `Tšekki`, code: 'CZE' },
    { name: `Tanska`, code: 'DNK' },
    { name: `Djibouti`, code: 'DJI' },
    { name: `dominica`, code: 'DMA' },
    { name: `Dominikaaninen tasavalta`, code: 'DOM' },
    { name: `Ecuador`, code: 'ECU' },
    { name: `Egypti`, code: 'EGY' },
    { name: `El Salvadorissa`, code: 'SLV' },
    { name: `Päiväntasaajan Guinea`, code: 'GNQ' },
    { name: `Eritrea`, code: 'ERI' },
    { name: `Viro`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiopia`, code: 'ETH' },
    { name: `Fidži`, code: 'FJI' },
    { name: `Suomi`, code: 'FIN' },
    { name: `Ranska`, code: 'FRA' },
    { name: `Ranskan Guayana`, code: 'GUF' },
    { name: `Ranskan Polynesia`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambia`, code: 'GMB' },
    { name: `Georgia`, code: 'GEO' },
    { name: `Saksa`, code: 'DEU' },
    { name: `Ghana`, code: 'GHA' },
    { name: `gibraltar`, code: 'GIB' },
    { name: `Kreikka`, code: 'GRC' },
    { name: `Grönlanti`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Guinea`, code: 'GIN' },
    { name: `Guinea-Bissau`, code: 'GNB' },
    { name: `Guyana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vatikaani`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hongkong`, code: 'HKG' },
    { name: `Unkari`, code: 'HUN' },
    { name: `Islanti`, code: 'ISL' },
    { name: `Intia`, code: 'IND' },
    { name: `Indonesia`, code: 'IDN' },
    { name: `Iran`, code: 'IRN' },
    { name: `Irak`, code: 'IRQ' },
    { name: `Irlanti`, code: 'IRL' },
    { name: `Mansaari`, code: 'IMN' },
    { name: `Israel`, code: 'ISR' },
    { name: `Italia`, code: 'ITA' },
    { name: `Jamaika`, code: 'JAM' },
    { name: `Japani`, code: 'JPN' },
    { name: `Jordania`, code: 'JOR' },
    { name: `Kazakstan`, code: 'KAZ' },
    { name: `Kenia`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Korea (Korean demokraattinen kansantasavalta)`, code: 'PRK' },
    { name: `Korea (ROK)`, code: 'KOR' },
    { name: `Kuwait`, code: 'KWT' },
    { name: `Kirgisia`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Latvia`, code: 'LVA' },
    { name: `Libanon`, code: 'LBN' },
    { name: `lesotho`, code: 'LSO' },
    { name: `Liberia`, code: 'LBR' },
    { name: `Libya`, code: 'LBY' },
    { name: `Liechtenstein`, code: 'LIE' },
    { name: `Liettua`, code: 'LTU' },
    { name: `Luxemburg`, code: 'LUX' },
    { name: `Macao`, code: 'MAC' },
    { name: `Makedonia`, code: 'MKD' },
    { name: `Madagaskar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malesia`, code: 'MYS' },
    { name: `Malediivit`, code: 'MDV' },
    { name: `mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Marshallsaaret`, code: 'MHL' },
    { name: `Martinique`, code: 'MTQ' },
    { name: `Mauritania`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Meksiko`, code: 'MEX' },
    { name: `Mikronesia`, code: 'FSM' },
    { name: `Moldova`, code: 'MDA' },
    { name: `Monaco`, code: 'MCO' },
    { name: `Mongolia`, code: 'MNG' },
    { name: `montenegro`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Marokko`, code: 'MAR' },
    { name: `Mosambik`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `namibia`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `Alankomaat`, code: 'NLD' },
    { name: `Uusi-Caledonia`, code: 'NCL' },
    { name: `Uusi Seelanti`, code: 'NZL' },
    { name: `nicaragua`, code: 'NIC' },
    { name: `Niger`, code: 'NER' },
    { name: `Nigeria`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Pohjois-Mariaanien`, code: 'MNP' },
    { name: `Norja`, code: 'NOR' },
    { name: `Oman`, code: 'OMN' },
    { name: `Pakistan`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Palestiina`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Papua-Uusi-Guinea`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Filippiinit`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Puola`, code: 'POL' },
    { name: `Portugali`, code: 'PRT' },
    { name: `Puerto Rico`, code: 'PRI' },
    { name: `Qatar`, code: 'QAT' },
    { name: `Réunion`, code: 'REU' },
    { name: `Romania`, code: 'ROU' },
    { name: `Venäjän federaatio`, code: 'RUS' },
    { name: `Ruanda`, code: 'RWA' },
    { name: `Saint Barthelemy`, code: 'BLM' },
    { name: `Saint Helena, Ascension ja Tristan da Cunha`, code: 'SHN' },
    { name: `Saint Kitts ja Nevis`, code: 'KNA' },
    { name: `Saint Lucia`, code: 'LCA' },
    { name: `Saint Martin`, code: 'MAF' },
    { name: `Saint-Pierre ja Miquelon`, code: 'SPM' },
    { name: `Saint Vincent ja Grenadiinit`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Sao Tome ja Principe`, code: 'STP' },
    { name: `Saudi-Arabia`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Serbia`, code: 'SRB' },
    { name: `Seychellit`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapore`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `slovakia`, code: 'SVK' },
    { name: `Slovenia`, code: 'SVN' },
    { name: `Solomonsaaret`, code: 'SLB' },
    { name: `somalia`, code: 'SOM' },
    { name: `Etelä-Afrikka`, code: 'ZAF' },
    { name: `eteläsudan`, code: 'SSD' },
    { name: `Espanja`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Sudan`, code: 'SDN' },
    { name: `suriname`, code: 'SUR' },
    { name: `Ruotsi`, code: 'SWE' },
    { name: `Sveitsi`, code: 'CHE' },
    { name: `Syyria`, code: 'SYR' },
    { name: `Taiwan`, code: 'TWN' },
    { name: `Tadžikistan`, code: 'TJK' },
    { name: `Tansania`, code: 'TZA' },
    { name: `Thaimaa`, code: 'THA' },
    { name: `Itä-Timor`, code: 'TLS' },
    { name: `Mennä`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad ja Tobago`, code: 'TTO' },
    { name: `Tunisia`, code: 'TUN' },
    { name: `Turkki`, code: 'TUR' },
    { name: `Turkmenistan`, code: 'TKM' },
    { name: `Turks-ja Caicossaaret`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ukraina`, code: 'UKR' },
    { name: `Yhdistyneet Arabiemiirikunnat`, code: 'ARE' },
    { name: `Yhdistynyt kuningaskunta`, code: 'GBR' },
    { name: `Yhdysvallat`, code: 'USA' },
    { name: `Yhdysvaltain Tyynenmeren erillissaaret`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Uzbekistan`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Vietnam`, code: 'VNM' },
    { name: `Britannian Neitsytsaaret`, code: 'VGB' },
    { name: `Yhdysvaltain Neitsytsaaret`, code: 'VIR' },
    { name: `Länsi-Sahara`, code: 'ESH' },
    { name: `Jemen`, code: 'YEM' },
    { name: `Sambia`, code: 'ZMB' },
    { name: `Zimbabwe`, code: 'ZWE' },
  ]
}
