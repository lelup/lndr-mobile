import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'Sunucuyla iletişimde bir sorun oluştu, lütfen daha sonra tekrar deneyiniz.'

export default {

  applicationName: `Lndr`,
  helloWorld: `Merhaba Dünya`,
  noConnection: `Bağlantı yok`,
  retry: `Tekrar dene`,
  submit: `GÖNDER`,
  next: `İleri`,
  cancel: `İptal et`,
  back: `Geri dön`,
  copy: `Panoya kopyala`,
  confirmAccount: `Onayla`,
  createAccount: `Hesap Oluştur`,
  recoverAccount: `Hesap Kurtarma`,
  removeAccount: `Hesabı Kaldır`,
  updateAccount: `Hesabı güncelle`,
  loginAction: `Kilidini aç`,
  enterPin: `Lütfen PİN kodunuzu girin`,
  changePin: `PİN'i değiştir`,
  enterCurrentPin: `Güncel PİN'i girin`,
  logoutAction: `ÇIKIŞ YAP`,
  seeAllActivity: `Tüm Hareketleri Görüntüle`,
  copiedClipboard: `Panoya kopyalandı`,
  pleaseWait: `Lütfen Bekleyin`,
  addFriend: `Arkadaş Ekle`,
  addFriendConfirmationQuestion: `Bu kullanıcıyı arkadaş olarak eklemek istediğine emin misin?`,
  removeFriend: `Arkadaş Sil`,
  currentFriends: `Güncel Arkadaşlar`,
  removeFriendConfirmationQuestion: `Bu kullanıcıyı arkadaşlarınızdan kaldırmak istediğinizden emin misiniz?`,
  inviteFriends: `Arkadaşlarını Lndr ’a Davet Et`,
  tryLndr: `Lndr Uygulamasını buradan deneyin:`,
  friendInfo: `Bu dostluk hakkında daha fazla bilgi:`,
  noFriends: `Başlamak için birkaç arkadaş ekle!`,
  noMatches: `Eşleşen kullanıcı bulunamadı`,
  noBalances: `Hiç kayıtlı borcunuz bulunmamakta`,
  addFriendButton: `Arkadaş Ekle`,
  alreadyFriendsButton: `Arkadaşlar`,
  friendShell: `Arkadaş`,
  tip: `İpucu:`,
  notice: `Uyarı:`,
  welcome: `LNDR ’ına hoş geldin`,
  noBalanceWarning: `Şu anda bakiyenizi yükleyemedik, daha sonra tekrar deneyin.`,
  totalBalance: `Toplam Bakiye:`,
  totalBalances: `Toplam karşı taraf:`,
  newTransaction: `Yeni İşlem`,
  needsReview: `Onay beklemede`,
  owesMe: `Bana borçlu olunan`,
  iOwe: `Başkasına borçlu olduğum`,
  newPassword: `Yeni Şifre (en az 8 karakter)`,
  confirmPassword: `Şifreyi Onayla`,
  newPin: `Yeni 4 haneli PİN`,
  enterNewPin: `LÜTFEN 4 HANELİ YENİ BİR PİN AYARLAYIN`,
  confirmPin: `LÜTFEN PİN’İNİZİ ONAYLAYIN`,
  newAccount: `Yeni bir hesap oluştur`,
  loginAccount: `Hesabınızın kilidini kaldırın`,
  recoverExistingAccount: `Mevcut bir hesabı kurtar`,
  recoverMnemonic: `Anımsatıcı Kod (Hesabınızı oluştururken \n bu 12 kelime görüntülenir)`,
  recoverMnemonicLengthError: `Anımsatıcı Kod tam olarak 12 kelime olmalıdır`,
  successTitle: `Başarılı`,
  errorTitle: `Hata`,
  showMnemonic: `12-Kelimelik Anımsatıcı Kodu göster`,
  mnemonicExhortation: `Bu 12 kelimelik öbek hesabınızı kurtarmak için gereklidir, lütfen gizli ve güvenli bir yerde saklayın.`,
  addressExhortation: `Lndr üzerindeki borçları kapatmak için adresinize Ethereum gönderin`,
  removeAccountTitle: `Bu cihazdan hesabınızı kaldırmak istediğinize emin misiniz?`,
  removeAccountExhortation: `Daha sonra hesabınızı kurtarmak için anımsatıcı kodunuza erişiminiz olduğundan emin olun, çünkü bu hareket hesap bilgilerinizin bu cihazdan kalıcı olarak silinmesi anlamına gelmektedir.`,
  myAccount: `Hesabım`,
  setNickname: `Bir kullanıcı adı seçin böylece arkadaşlarınız sizi arayabilsinler`,
  setEmail: `Lndr güncellemeleri hakkında bilgi almak için bir e-posta girin`,
  nickname: `Kullanıcı adı (sadece küçük harfler ve sayılar)`,
  email: `E-posta Adresi`,
  lndrVerified: {
    ok: `tamam`,
    title: `Müşteri gereksinimlerini bilin tamamlayarak yüksek yerleşim limiti ve kripto çekilme miktarlarını ayarlayın.`,
    statusTitle: `Onayýnýz mevcut durumu:`,
    tryAgain: `Biz kimliğinizi doğrulamak edemedik. bilgilerinizi yeniden ve fotoğraflarınız okunaklı olduğundan emin olun.`,
    formMessage: `Aşağıdaki tüm alanları doldurunuz`,
    button: `Kimliginizi dogrulayin`,
    prefix: `Verilerinizi nasıl yöneteceğimizi öğrenmek için `,
    linkTitle: `Gizlilik Politikamızı `,
    postfix: `okuyun`,
    upload: `Devlet `,
    governmentId: `tarafından verilen kimlik yükle`,
    selfie: `devlet tarafından verilmiş kimliğine sahip bir özçekim'i yükleyin`,
    proofOfAddress: `Adres kanıtı`,
    ifNotId: `(Değilse İD)`,
    agree: `Okudum ve `,
    agreeLink: `Gizlilik Politikası'nı kabul ettim`,
    success: `KYC gönderildi.`,
    idInfoHeader: `İD örnekleri aşağıdakileri içerir:`,
    passport: `Pasaport`,
    drivers: `Ehliyet`,
    national: `Ulusal kimlik kartı`,
    addressInfoHeader: `adres kanıtları örnekler:`,
    bank: `Hesap durumu`,
    utility: `Fatura`,
    other: `Diğer Belge`,
    chooseGovernmentPhoto: `Resmi Kimlik Fotoğrafı Seç`,
    chooseSelfiePhoto: `Selfie'nin Fotoğrafı Seç`,
    chooseAddressPhoto: `Adres Fotoğraf Belgesi seç`,
    emailRequired: `Sen "E-postanı Değiştir", lütfen kimliğinizi doğrulamak için bir e-posta gereken`,
    approved: `ONAYLANDI`,
    rejected: `REDDEDİLDİ`,
    pending: `Beklemede`,
    error: generalCommunicationError,
    formFields: {
      firstName: `İsim`,
      lastName: `Soyadı`,
      street: `Açık adres`,
      city: `Kent`,
      state: `Eyalet / İl`,
      postalCode: `posta kodu`,
      country: `Ülke seçin`,
      phone: `Telefon numarası`,
      dob: `Doğum tarihi (YYYY-AA-GG)`,
    },
    formErrors: {
      firstName: `Ad gereklidir`,
      lastName: `Soyadı gereklidir`,
      street: `Sokak gereklidir`,
      city: `Şehir gerekli`,
      state: `Eyalet / İl gereklidir`,
      postalCode: `Posta Kodu gereklidir`,
      country: `Ülke gereklidir`,
      phone: `Telefon Numarası gereklidir`,
      dob: `Doğum tarihi gereklidir`,
      general: `Doğru fotoğraf tüm alanları doldurmuş ve ekli olduğundan emin olun`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `Kullanıcı adı en az 3 karakter olmalıdır.`,
      compositionViolation: `Kullanıcı adı yalnızca sayıları ve küçük harfleri içerebilir.`,
      duplicationViolation: `Kullanıcı adı zaten alınmış`,
    },
    email: {
      compositionViolation: `E-posta biçimi yanlış`,
      duplicationViolation: `E-posta zaten alınmış`,
    },
    pin: {
      lengthViolation: `PİN en az 4 karakter uzunluğunda olmalıdır.`,
      matchViolation: `PİN'ler eşleşmesi gerekir.`,
      failedHashComparison: `PİN geçerli değil, lütfen tekrar deneyin.`,
      updateSuccess: `PİN güncellendi`,
      updateError: `PİN güncellenirken bir hata oluştu`,
    },
    mnemonic: {
      lengthViolation: `Anımsatıcı kod en az 12 kelime olmalıdır.`,
      unableToValidate: `Girilen anımsatıcı kod doğru değil, lütfen tekrar deneyin.`,
    },
    setNickname: {
      success: `Kullanıcı adınız kaydedildi.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `E-posta’nız kaydedildi.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: ``,
      bottom: `dakika hareketsiz olunca PIN’inizi yeniden girmeniz gereklidir.`,
      update: `Güncelleştirme`,
      error: `Hesap ayarlarınızı güncelleştiremedik`,
      success: `Kilitleme Süresi Güncellendi`,
    },
    addFriend: {
      success: X => `@${X}’a arkadaşlık isteği gönderildi`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `@${X} arkadaşlardan çıkarıldı`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    ethBalance: {
      display: Y => `ETH bakiyeniz ${String (Y) .slice (0,8)}`,
      getError: `Eth bakiyesi çekilemedi`,
      manage: `ETH yönetimi`,
    },
    sendEth: {
      error: {
        insufficient: `Bu işlem için yeterli ETH ‘niz mevcut değil`,
        generic: `Aktarımda bir sorun oluştu, lütfen daha sonra tekrar deneyin`,
        address: `Lütfen geçerli bir adres girin`,
        amount: `Lütfen 0’dan yüksek bir tutar girin`,
        limitExceeded: A => `Haftada sadece ${CUR(A)}${TL(A)} gönderebilirsiniz, daha düşük bir miktar seçiniz`
      },
      amount: `Gönderilecek Tutar`,
      address: `Hedef Adres ('0x' ön eki olmadan)`,
      transfer: `ETH Aktar`,
      transferAll: `Her şeyi aktarın`,
      balance: Y => `Mevcut ETH bakiyeniz ${typeof Y === 'string' ? Y.slice(0,8) :''}`,
      ethAddress: `Ethereum Adresi`,
      txCost: (B, A) => `Mevcut işlem maliyeti ${CUR(A)}${B} 'dir` ,
      transferLowercase: `ETH Aktar`,
      note: A => `Lütfen dikkat: Lndr dışına haftada sadece ${CUR(A)}${TL(A)} aktarabilirsiniz`,
      warning: (Z, A) => `${CUR(A)}${TL(A)} limitinizin ${CUR(A)}${Z} kısmı kalmış bulunmaktadır`
    },
    sendBcpt: {
      error: {
        insufficient: `Bu işlem için yeterli BCPT ‘niz mevcut değil`,
        generic: `Aktarımda bir hata oluştu, lütfen daha sonra tekrar deneyin`,
      },
      transfer: `BCPT aktar`,
      address: `Hedef Adresi ( '0x' ön eki olmadan)`,
      balance: Y => `Geçerli BCPT bakiyeniz ${typeof Y === 'string' ? Y.slice(0,8) :''}`,
      bcptAddress: `BCPT Adresi`,
    },
    panelHeaders: [
      `ETH (ve BCPT) Adresi`,
      `ETH Bakiyesi`,
      `BCPT Bakiyesi`,
      `Hesabı Kaldır`,
      `ETH İşlem Geçmişi`,
      `Paypal etkinleştirme`,
      `Birincil Para değiştirme`,
      `Ek Özellikleri kilidini`,
      `E-postanı Değiştir`,
      `Pin'i Değiştir`,
      `Kilitleme Süresini Değiştir`,
      `Anımsatıcı Kod`,
      `Bildirimler`,
    ],
    viewEtherscan: `Etherscan Geçmişini Görüntüle`,
    profilePic: {
      change: `Profil resmini değiştir`,
      setError: `Resminizi yüklerken bir hata oluştu, lütfen tekrar deneyiniz`,
      getError: `Profil resminiz alınırken bir hata oluştu`,
      setSuccess: `Profil resmi güncellendi`,
    },
    logoutSuccess: `Başarıyla çıkış yaptınız!`,
    logoutError: generalCommunicationError,
  },

  currentBalance: {
    eth: `Geçerli Eth bakiyeniz:`,
    bcpt: `Geçerli BCPT bakiyeniz:`,
  },

  welcomeView: {
    by: `GELİŞTİREN FİRMA`,
    makeItEasy: `Lndr basit borçlarınızı izlemeyi kolaylaştırır`,
    weHelpFriends: `Biz arkadaşların birlikte yaşamasına, çalışmasına ve oynamasına yardımcı oluruz.`,
    len: `Len`,
    dot: `.`,
    der: `dır`,
    shareDinner: `Yemekte Hesabı Paylaşın`,
    fillTank: `Deponuzu Doldurun`,
    travelTogether: `Birlikte Seyahat Edin`,
    runEthereum: `Biz ETH ile çalışırız!`,
    firstLendingApp: `Blockchain ile güvenliği sağlanan ilk mobil borç verme uygulaması.`,
    greatConcert: `Harika bir Konseri İzleyin`,
    youPlayWithFriends: `Sen arkadaşlarınla ​​eğlen; \n Biz hesabını tutalım…`,
    start: `Buradan Başlayın`,
  },

  walkthrough: {
    skip: `atlamak`,
    continue: `devam et`,
    step1: {
      easyToUse: `Lndr faturaları, paylaşmak giderlerini bölünmüş ve tüm blockchain güvenle yapılabilir, arkadaşlar ve aile ile basit bir borcun ifası en kolay yoludur.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Lndr kullanmaya başlamak için, bir arkadaş eklemek gerekir.`,
      friendsScreen: `Için arama ekleyebilir veya Lndr üzerinde bağlanmak için arkadaşlarınızı ve ailenizi davet arkadaşından ekranını ziyaret edin.`,
    },
    step3: {
      title: `Bir İşlem Kaydetme`,
      easy: `bir fatura Yarma veya bir arkadaşınızla bir borç ekleyerek Lndr kolaydır!`,
      selectFriend: `Arkadaşınız senin para birimini ve miktarını seçin.`,
      addMemo: `not kutusunda bazı notlar ekleyin ve Gönder'i tıklayın.`,
    },
    step4: {
      title: `Ödeşin`,
      ready: `Ödeşin hazır?`,
      payPal: `o Lndr ile hesaplaşmak zamanı geldiğinde, \n PayPal seçebilirsiniz:`,
      ether: `- Eter gibi cryptocurrencies:`,
      cash: `- ya da sadece bir nakit yerleşim kayıt:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Çoklu parabirim`,
      multiCurrency: `Lndr, farklı para birimlerinde olsalar bile işlemlerinizin takip edebilirsiniz.`,
      exchangeRate: `Eğer arkadaşınız ile hesaplaşmak karar verdiğinizde, tüm işlemler büyük yukarı güncel döviz kurları mevcut kullanarak birincil para birimine dönüştürülecektir.`,
      start: `Lndr kullanmaya başlayın!`,
    }
  },

  debtManagement: {
    shell: `Yeni İşlem`,
    add: `Borç ekle`,
    selectFriend: `Seç`,
    lend: `Yeni Borç Verme`,
    borrow: `Yeni Borç Alma`,
    owesMe: `Bana borclu`,
    iOwe: `Borçluyum`,
    iLent: `Bir arkadaşım bana borçlu`,
    iBorrowed: `Bir arkadaşıma borçluyum`,
    settleUpLower: `Ödeşin`,
    amountToSettle: `Ödeşilecek Tutar`,
    total: `Toplam`,
    record: `kayıt`,
    records: `kayıt`,
    chooseCurrency: `Bir para birimi seç`,
    
    createError: {
      amountTooLow: `Tutar 0$ 'dan büyük olmalıdır`,
      amountTooHigh: `Tutar 1,000,000,000$ ‘dan az olmalıdır`,
      selfAsFriend: `Kendinize borç oluşturamazsınız, başka bir arkadaş seçin`,
      pending: `Lütfen başka bir işlem oluşturmadan önce bu kullanıcı ile olan bekleyen işleminizi sonuçlandırın.`,
      insufficientEth: E => `Borcunu ödemek için ${E} ETH’e ihtiyaç duymaktasın, Ayarlara giderek bakiyenizi görüntüleyebilirsiniz`,
    },
    fields: {
      currency: `Para birimi`,
      amount: `Miktar`,
      settlementAmount: `Kapanacak hesap tutarı`,
      selectFriend: `Arkadaş`,
      memo: `Not`,
      direction: `Doğru İfadeyi Seçin`,
    },
    memo: {
      example: `Buraya not yazabilirsiniz`,
    },
    direction: {
      lend: X => `${X} bana borçludur`,
      borrow: X => `Ben ${X}’a borçluyum`,
      initiatedLend: X => `${X} onun borçlu olduğunu söylüyor`,
      initiatedBorrow: X => `${X} sizin borçlu olduğunuzu söylüyor`,
      pendingLend: X => `@${X} size borçlu`,
      pendingBorrow: X => `@${X}’a borçlusunuz`,
      pendingLendSettlement: S => `@${S.debtorNickname} ${S.settlementCurrency} üzerinden ödeşmeyi talep ediyor`,
      pendingBorrowSettlement: S => `@${S.debtorNickname} ${S.settlementCurrency} üzerinden ödeşmek istiyor`,
      pendingLendSettlementMe: S => `@${S.debtorNickname} ile ${S.settlementCurrency} üzerinden ödeşmeyi talep ettiniz`,
      pendingBorrowSettlementMe: S => `@${S.debtorNickname} ile ödeşmenizin ${S.settlementCurrency} üzerinden olmasını talep ettiniz`,
    },
    pending: {
      success: F => `Beklemeye alınan borç bilgisi @${F.nickname}’a gönderildi`,
      error: generalCommunicationError
    },
    pendingParens: `(Beklemede)`,
    confirmation: {
      transaction: CP => `${CP} ile olan işlem başarıyla onaylandı`,
      settlement: CP => `${CP} ile olan ödeşme başarıyla onaylandı`,
      error: `Şu anda işlemi onaylayamadık, lütfen daha sonra tekrar deneyin`,
    },
    rejection: {
      success: `İşlem reddedildi`,
      error: `Şu anda işlem reddedilemiyor, lütfen daha sonra tekrar deneyiniz`,
    },
    balances: {
      error: `Şu anda bakiyeler yüklenemiyor, lütfen daha sonra tekrar deneyiniz`,
    },
    for: M => `sebebi ${M}`,
    settleUp: `Ödeşin`,
    settleTotal: `Tüm Hesabı Kapat`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'Size ödenecek tutar' : 'Ödenmesini istediğiniz tutar'} ${A}`,
    recordSettleUpMemo: `Ödeşiliyor`,
    balanceByCurrency: `Ayrıntılar`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `${X} ile olan ödeşmeniz, yetersiz bakiye sebebiyle başarısız oldu`,
        generic: X => `${X} ile olan ödeşmeniz işlenirken bir hata oluştu`,
      }
    },
    eth: `Eth kullanarak ödeşin`,
    paypal: `PayPal kullanarak ödeşin`,
    nonPayment: `Bir ödeme kaydı oluşturun`,
    select: `Uzlaşma tipi seç`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `Anasayfa`,
    friends: `Arkadaş`,
    activity: `Hareketler`,
  },

  notifications: {
    toggleNotifications: `Bildirimleri Aç/Kapat`,
    enable: `Aç`,
    disable: `Kapat`,
  },

  pendingTransactionsLanguage: {
    shell: `Bekleyen işlem`,
    title: `Beklemede`,
    memo: `Not:`,
    for: `Sebebi`,
    none: `Beklemede olan işleminiz bulunmamakta`,
    confirmationQuestion: `Bu işlemi onaylamak istediğinize emin misiniz?`,
    pendingAnnouncement: `Bu işlem diğer tarafın onayını bekliyor.`,
    bilateral: `Eth aktarımının tamamlanması bekleniyor`,
    confirm: `Onayla`,
    reject: `İşlemi Reddet`,
    rejectRequest: `Reddet`,
    cancel: `İşlemi iptal et`,
    direction: {
      lend: (X, Z) => `@${X} size ${Z} borçlu`,
      borrow: (X, Z) => `@${X}’a ${Z} borçlusunuz`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `Beklemedeki Ödeme`,
    title: `Bekliyor`,
    none: `Beklemede olan işleminiz bulunmamakta`,
    confirm: `Onayla`,
    reject: `Ödemeyi Reddet`,
    cancel: `Ödemeyi İptal Et`,
  },

  recentTransactionsLanguage: {
    title: `Devam`,
    none: `Tamamlanmış işleminiz bulunmamakta`,
    direction: {
      lend: (X, Z) => `@${X} size ${Z} borçlu`,
      borrow: (X, Z) => `@${X}’a ${Z} borçlusunuz`,
    },
    balance: `Bakiye`,
    consolidatedBalance: `Bakiye`,
    friends: FS => `(${FS} ${FS === 1 ? 'arkadaştan' :'arkadastan'})`,
  },

  tabs: {
    home: `Anasayfa `,
    friends: `Arkadaş`,
    activity: `Hareketler`,
  },

  confirmation: {
    shell: `Onay`,
    done: `Tamamlandı`,
    create: {
      start: `Kaydı onaylanması için `,
      end: `’a gönderdik.`,
    },
    confirm: {
      start: ``,
      end: `’daki bu kaydı onayladınız.`,
    },
    reject: {
      start: `Bu kaydı reddettiğinizi `,
      end: `’a bildirdik.`,
    },
    confirmFriend: {
      start: ``,
      end: ` ile arkadaş oldunuz!`,
    },
    rejectFriend: {
      start: ``,
      end: `’dan gelen arkadaşlık isteğini reddettiniz.`,
    },
    rejectOutboundFriendRequest: {
      start: `Sen `,
      end: ` Arkadaş isteğini iptal.`,
    },
    ethSent: {
      start: `Başarıyla `,
      end: ` ETH gönderdiniz ve işlem sağlama kodunuz `,
    },
    bcptSent: {
      start: `Başarıyla `,
      end: ` BCPT gönderdiniz ve işlem sağlama kodunuz `,
    },
    requestPayPalPayee: {
      start: `Biz `,
      end: ` PayPal ile yerleşmek istiyoruz bildirmiştiniz.`,
    },
    requestPayPalPayment: {
      start: `Biz `,
      end: ` PayPal ile ödenecek istediğinizi bildirdiniz.`,
    },
    settledWithPayPal: {
      start: `Biz `,
      end: ` PayPal ile sonuçlandığını bildirmiştiniz.`,
    },
    kycSuccess: {
      start: `Teşekkür ederim! Hesabınız doğrulandı ediliyor.  
      
      `,
      end: `Sizin ek özellikler kilidi olduğunda bildirim yapılacaktır.` 
    },
    status: ``,
    activity: `Hareketler sekmesinde bu işlemin durumunu görebilirsiniz.`,
  },

  pendingFriendRequestsLanguage: {
    shell: `Arkadaşlık isteği`,
    message: `Arkadaş istekleri`,
    request: F => `@${F} seninle arkadaş olmak istiyor!`,
    outbound: F => `Sen @${F} için arkadaşlık isteği gönderdi`,
  },

  privacyPolicy: {
    link: `lndr.io/terms/`,
    message: `Altınızda tıklayarak okuyup Blockmason gizlilik politikasına kabul ettiğinizi onaylayın. Blockmason Blockmason ve LNDR hakkında güncellemeleri göndermek için e-posta adresinizi kullanabiliriz. İşte gizlilik politikasına bir link:`,
  },

  payPalLanguage: {
    connectPayPal: `PayPal bağlayın`,
    connectSuccess: `PayPal başarıyla sağladı.`,
    disconnectPayPal: `Kes PayPal`,
    disconnected: `PayPal bağlantısı kesildi.`,
    requestPayPalPayment: `Talep PayPal Ödeme`,
    sendWithPayPal: `PayPal ile gönder`,
    enablePayPal: `Paypal etkinleştirme`,
    requestPayPalPayee: `PayPal talep`,
    enablePayPalForFriend: F => `PayPal @${F} ödeme yapmanıza izin verir etkinleştirilmesiq`,
    friendNotEnabled: F => `@${F} etkinleştirmedi Paypal payments`,
    friendRequestedConnect: F => `@${F} PayPal aracılığıyla sana ödeme yapmak istiyor`,
    requestFriendConnect: F => `Sen, @${F} PayPal etkinleştirmek istedi`,
    feesNotification: `PayPal ücretlerini içermez`,
    feesInformationHeader: `PayPal Ücret Bilgileri`,
    feesInformation: `1. PayPal hesabınız bir banka hesabına bağlı olması gerekir.
    
2. Bankanızın para biriminden farklı bir para ödeme bir 0,35 $ ücreti alınacaktır.

3. Uluslararası transfer ücretleri:
    Kanada / Avrupa'ya ABD: $ 2.99
    Başka bir yerde için ABD: $ 4.99

4. Bu ücretler kapsamlı değildir. En güncel bilgiler için lütfen şu adrese gidin:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `Afganistan`, code: 'AFG' },
    { name: `Arnavutluk`, code: 'ALB' },
    { name: `Cezayir`, code: 'DZA' },
    { name: `Andorra`, code: 'AND' },
    { name: `Angora`, code: 'AGO' },
    { name: `Anguilla`, code: 'AIA' },
    { name: `Antarktika`, code: 'ATA' },
    { name: `Antigua ve Barbuda`, code: 'ATG' },
    { name: `Arjantin`, code: 'ARG' },
    { name: `Ermenistan`, code: 'ARM' },
    { name: `Aruba`, code: 'ABW' },
    { name: `Avustralya`, code: 'AUS' },
    { name: `Avusturya`, code: 'AUT' },
    { name: `Azerbeycan`, code: 'AZE' },
    { name: `Bahamalar`, code: 'BHS' },
    { name: `Bahreyn`, code: 'BHR' },
    { name: `Bangladeş`, code: 'BGD' },
    { name: `Barbados`, code: 'BRB' },
    { name: `Belarus`, code: 'BLR' },
    { name: `Belçika`, code: 'BEL' },
    { name: `Belize`, code: 'BLZ' },
    { name: `Benin`, code: 'BEN' },
    { name: `Bermuda`, code: 'BMU' },
    { name: `Butan`, code: 'BTN' },
    { name: `Bolivya`, code: 'BOL' },
    { name: `Bosna Hersek`, code: 'BIH' },
    { name: `Botsvana`, code: 'BWA' },
    { name: `Brezilya`, code: 'BRA' },
    { name: `Brunei`, code: 'BRN' },
    { name: `Bulgaristan`, code: 'BGR' },
    { name: `Burkina Faso`, code: 'BFA' },
    { name: `Burundi`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `Kamboçya`, code: 'KHM' },
    { name: `Kamerun`, code: 'CMR' },
    { name: `Kanada`, code: 'CAN' },
    { name: `Cayman Adaları`, code: 'CYM' },
    { name: `Orta Afrika Cumhuriyeti`, code: 'CAF' },
    { name: `Çad`, code: 'TCD' },
    { name: `Şili`, code: 'CHL' },
    { name: `Çin`, code: 'CHN' },
    { name: `Kolombiya`, code: 'COL' },
    { name: `Komorlar`, code: 'COM' },
    { name: `Kongo`, code: 'COG' },
    { name: `Kongo`, code: 'COD' },
    { name: `Cook Adaları`, code: 'COK' },
    { name: `Kostarika`, code: 'CRI' },
    { name: `Fildişi Sahilleri`, code: 'CIV' },
    { name: `Hırvatistan`, code: 'HRV' },
    { name: `Küba`, code: 'CUB' },
    { name: `Curacao`, code: 'CUW' },
    { name: `Kıbrıs`, code: 'CYP' },
    { name: `Çekya`, code: 'CZE' },
    { name: `Danimarka`, code: 'DNK' },
    { name: `Cibuti`, code: 'DJI' },
    { name: `Dominika`, code: 'DMA' },
    { name: `Dominik Cumhuriyeti`, code: 'DOM' },
    { name: `Ekvador`, code: 'ECU' },
    { name: `Mısır`, code: 'EGY' },
    { name: `El Salvador`, code: 'SLV' },
    { name: `Ekvator Ginesi`, code: 'GNQ' },
    { name: `Eritre`, code: 'ERI' },
    { name: `Estonya`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `Etiyopya`, code: 'ETH' },
    { name: `Fiji`, code: 'FJI' },
    { name: `Finlandiya`, code: 'FIN' },
    { name: `Fransa`, code: 'FRA' },
    { name: `Fransız Guyanası`, code: 'GUF' },
    { name: `Fransız Polinezyası`, code: 'PYF' },
    { name: `Gabon`, code: 'GAB' },
    { name: `Gambiya`, code: 'GMB' },
    { name: `Gürcistan`, code: 'GEO' },
    { name: `Almanya`, code: 'DEU' },
    { name: `Gana`, code: 'GHA' },
    { name: `Cebelitarık`, code: 'GIB' },
    { name: `Yunanistan`, code: 'GRC' },
    { name: `Grönland`, code: 'GRL' },
    { name: `Grenada`, code: 'GRD' },
    { name: `Guadeloupe`, code: 'GLP' },
    { name: `Guam`, code: 'GUM' },
    { name: `Guatemala`, code: 'GTM' },
    { name: `Gine`, code: 'GIN' },
    { name: `Gine-Bissau`, code: 'GNB' },
    { name: `Guyana`, code: 'GUY' },
    { name: `Haiti`, code: 'HTI' },
    { name: `Vatikan`, code: 'VAT' },
    { name: `Honduras`, code: 'HND' },
    { name: `Hong Kong`, code: 'HKG' },
    { name: `Macaristan`, code: 'HUN' },
    { name: `İzlanda`, code: 'ISL' },
    { name: `Hindistan`, code: 'IND' },
    { name: `Endonezya`, code: 'IDN' },
    { name: `İran`, code: 'IRN' },
    { name: `Irak`, code: 'IRQ' },
    { name: `İrlanda`, code: 'IRL' },
    { name: `Man Adası`, code: 'IMN' },
    { name: `İsrail`, code: 'ISR' },
    { name: `İtalya`, code: 'ITA' },
    { name: `Jamaika`, code: 'JAM' },
    { name: `Japonya`, code: 'JPN' },
    { name: `Ürdün`, code: 'JOR' },
    { name: `Kazakistan`, code: 'KAZ' },
    { name: `Kenya`, code: 'KEN' },
    { name: `Kiribati`, code: 'KIR' },
    { name: `Kore (Kuzey Kore)`, code: 'PRK' },
    { name: `Kore (ROK)`, code: 'KOR' },
    { name: `Kuveyt`, code: 'KWT' },
    { name: `Kırgızistan`, code: 'KGZ' },
    { name: `Laos`, code: 'LAO' },
    { name: `Letonya`, code: 'LVA' },
    { name: `Lübnan`, code: 'LBN' },
    { name: `Lesotho`, code: 'LSO' },
    { name: `Liberya`, code: 'LBR' },
    { name: `Libya`, code: 'LBY' },
    { name: `Lihtenştayn`, code: 'LIE' },
    { name: `Litvanya`, code: 'LTU' },
    { name: `Lüksemburg`, code: 'LUX' },
    { name: `Macao`, code: 'MAC' },
    { name: `Makedonya`, code: 'MKD' },
    { name: `Madagaskar`, code: 'MDG' },
    { name: `Malawi`, code: 'MWI' },
    { name: `Malezya`, code: 'MYS' },
    { name: `Maldivler`, code: 'MDV' },
    { name: `Mali`, code: 'MLI' },
    { name: `Malta`, code: 'MLT' },
    { name: `Marşal Adaları`, code: 'MHL' },
    { name: `Martinik`, code: 'MTQ' },
    { name: `Moritanya`, code: 'MRT' },
    { name: `Mauritius`, code: 'MUS' },
    { name: `Meksika`, code: 'MEX' },
    { name: `Mikronezya`, code: 'FSM' },
    { name: `Moldova`, code: 'MDA' },
    { name: `Monako`, code: 'MCO' },
    { name: `Moğolistan`, code: 'MNG' },
    { name: `Karadağ`, code: 'MNE' },
    { name: `Montserrat`, code: 'MSR' },
    { name: `Fas`, code: 'MAR' },
    { name: `Mozambik`, code: 'MOZ' },
    { name: `Myanmar`, code: 'MMR' },
    { name: `Namibya`, code: 'NAM' },
    { name: `Nauru`, code: 'NRU' },
    { name: `Nepal`, code: 'NPL' },
    { name: `Hollanda`, code: 'NLD' },
    { name: `Yeni Kaledonya`, code: 'NCL' },
    { name: `Yeni Zelanda`, code: 'NZL' },
    { name: `Nikaragua`, code: 'NIC' },
    { name: `Nijer`, code: 'NER' },
    { name: `Nijerya`, code: 'NGA' },
    { name: `Niue`, code: 'NIU' },
    { name: `Kuzey Mariana Adaları`, code: 'MNP' },
    { name: `Norveç`, code: 'NOR' },
    { name: `Umman`, code: 'OMN' },
    { name: `Pakistan`, code: 'PAK' },
    { name: `Palau`, code: 'PLW' },
    { name: `Filistin`, code: 'PSE' },
    { name: `Panama`, code: 'PAN' },
    { name: `Papua Yeni Gine`, code: 'PNG' },
    { name: `Paraguay`, code: 'PRY' },
    { name: `Peru`, code: 'PER' },
    { name: `Filipinler`, code: 'PHL' },
    { name: `Pitcairn`, code: 'PCN' },
    { name: `Polonya`, code: 'POL' },
    { name: `Portekiz`, code: 'PRT' },
    { name: `Porto Riko`, code: 'PRI' },
    { name: `Katar`, code: 'QAT' },
    { name: `Réunion`, code: 'REU' },
    { name: `Romanya`, code: 'ROU' },
    { name: `Rusya Federasyonu`, code: 'RUS' },
    { name: `Ruanda`, code: 'RWA' },
    { name: `saint Barthelemy`, code: 'BLM' },
    { name: `Saint Helena, Ascension ve Tristan da Cunha`, code: 'SHN' },
    { name: `Saint Kitts and Nevis`, code: 'KNA' },
    { name: `Lucia`, code: 'LCA' },
    { name: `Aziz Martin`, code: 'MAF' },
    { name: `Aziz Pierre ve Miquelon`, code: 'SPM' },
    { name: `Saint Vincent ve Grenadines`, code: 'VCT' },
    { name: `Samoa`, code: 'WSM' },
    { name: `San Marino`, code: 'SMR' },
    { name: `Sao Tome ve Principe`, code: 'STP' },
    { name: `Suudi Arabistan`, code: 'SAU' },
    { name: `Senegal`, code: 'SEN' },
    { name: `Sırbistan`, code: 'SRB' },
    { name: `Seyşeller`, code: 'SYC' },
    { name: `Sierra Leone`, code: 'SLE' },
    { name: `Singapur`, code: 'SGP' },
    { name: `Sint Maarten`, code: 'SXM' },
    { name: `Slovakya`, code: 'SVK' },
    { name: `Slovenya`, code: 'SVN' },
    { name: `Solomon Adaları`, code: 'SLB' },
    { name: `Somali`, code: 'SOM' },
    { name: `Güney Afrika`, code: 'ZAF' },
    { name: `Güney Sudan`, code: 'SSD' },
    { name: `ispanya`, code: 'ESP' },
    { name: `Sri Lanka`, code: 'LKA' },
    { name: `Sudan`, code: 'SDN' },
    { name: `Surinam`, code: 'SUR' },
    { name: `İsveç`, code: 'SWE' },
    { name: `İsviçre`, code: 'CHE' },
    { name: `Suriye Arap Cumhuriyeti`, code: 'SYR' },
    { name: `Tayvan`, code: 'TWN' },
    { name: `Tacikistan`, code: 'TJK' },
    { name: `Tanzanya`, code: 'TZA' },
    { name: `Tayland`, code: 'THA' },
    { name: `Timor-Leste`, code: 'TLS' },
    { name: `Gitmek`, code: 'TGO' },
    { name: `Tokelau`, code: 'TKL' },
    { name: `Tonga`, code: 'TON' },
    { name: `Trinidad ve Tobago`, code: 'TTO' },
    { name: `Tunus`, code: 'TUN' },
    { name: `Türkiye`, code: 'TUR' },
    { name: `Türkmenistan`, code: 'TKM' },
    { name: `Turks ve Caicos Adaları`, code: 'TCA' },
    { name: `Tuvalu`, code: 'TUV' },
    { name: `Uganda`, code: 'UGA' },
    { name: `Ukrayna`, code: 'UKR' },
    { name: `Birleşik Arap Emirlikleri`, code: 'ARE' },
    { name: `Birleşik Krallık`, code: 'GBR' },
    { name: `Amerika Birleşik Devletleri`, code: 'USA' },
    { name: `Amerika Birleşik Devletleri Küçük Dış Adaları`, code: 'UMI' },
    { name: `Uruguay`, code: 'URY' },
    { name: `Özbekistan`, code: 'UZB' },
    { name: `Vanuatu`, code: 'VUT' },
    { name: `Venezuela`, code: 'VEN' },
    { name: `Vietnam`, code: 'VNM' },
    { name: `İngiliz Virgin Adaları`, code: 'VGB' },
    { name: `Amerika Birleşik Devletleri Virgin Adaları`, code: 'VIR' },
    { name: `Batı Sahra`, code: 'ESH' },
    { name: `Yemen`, code: 'YEM' },
    { name: `Zambiya`, code: 'ZMB' },
    { name: `Zimbabve`, code: 'ZWE' },
  ]
}
