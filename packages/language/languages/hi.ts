import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'सर्वर से कम्यूनिकेट करते समय कोई समस्या हुई, कृपया बाद में दोबारा प्रयास करें।.'

export default {

  applicationName: `Lndr`,
  helloWorld: `हैलो दोस्तों`,
  noConnection: `कोई कनेक्शन नहीं`,
  retry: `पुन: प्रयास करें`,
  submit: `सब्मिट करें`,
  next: `अगला`,
  cancel: `रद्द करें`,
  back: `वापस जाएँ`,
  copy: `क्लिपबोर्ड पर कॉपी करें`,
  confirmAccount: `कन्फ़र्म करें`,
  createAccount: `अकाउंट बनाएँ`,
  recoverAccount: `अकाउंट वापस लाएँ`,
  removeAccount: `अकाउंट डिलीट करें`,
  updateAccount: `अपडेट अकाउंट`,
  loginAction: `अनलॉक`,
  enterPin: `कृपया अपना पिन दर्ज करें`,
  changePin: `पिन बदलें`,
  enterCurrentPin: `वर्तमान पिन दर्ज करें`,
  logoutAction: `लॉग-आउट`,
  seeAllActivity: `पूरी एक्टिविटी दिखाएँ`,
  copiedClipboard: `क्लिपबोर्ड पर कॉपी कर दिया गया`,
  pleaseWait: `कृपया प्रतीक्षा करें`,
  addFriend: `फ्रेंड जोड़ें`,
  addFriendConfirmationQuestion: `क्या आप इस यूजर को वाकई में फ्रेंड के रूप में जोड़ना चाहते हैं?`,
  removeFriend: `फ्रेंड हटाएँ`,
  currentFriends: `वर्तमान फ्रेंड्स`,
  removeFriendConfirmationQuestion: `क्या आप वाकई में इस यूजर को फ्रेंड के रूप में हटाना चाहते हैं?`,
  inviteFriends: `Lndr पर फ्रेंड्स को इनवाइट करें`,
  tryLndr: `Lndr एप यहाँ ट्राय करें:`,
  friendInfo: `इस फ्रेंडशिप के बारे में और जानकारी:`,
  noFriends: `शुरू करने के लिए कुछ फ़्रेंड्स जोड़ें!`,
  noMatches: `कोई मैचिंग यूज़र नहीं मिला`,
  noBalances: `आपके कोई रिकॉर्डेड लोन नहीं हैं`,
  addFriendButton: `फ्रेंड जोड़ें`,
  alreadyFriendsButton: `फ्रेंड्स`,
  friendShell: `फ्रेंड`,
  tip: `टिप:`,
  notice: `नोटिस:`,
  welcome: `आपके LNDR में आपका स्वागत है`,
  noBalanceWarning: `हम इस समय आपका बैलेंस लोड नहीं कर पाए, कृपया बाद में दोबारा प्रयास करें।`,
  totalBalance: `कुल बैलेंस:`,
  totalBalances: `कुल काउंटरपार्टियाँ:`,
  newTransaction: `नया ट्रैंज़ैक्शन`,
  needsReview: `एप्रूवल पेंडिंग है`,
  owesMe: `मेरी लेनदारी है`,
  iOwe: `मेरी किसी पर देनदारी है`,
  newPassword: `नया पासवर्ड (कम से कम 8 कैरक्टर)`,
  confirmPassword: `पासवर्ड कन्फ़र्म कीजिए`,
  newPin: `नई 4 अंकों वाली पिन`,
  enterNewPin: `कृपया 4 अंकों वाली कोई नई पिन सेट करें`,
  confirmPin: `कृपया अपनी पिन कन्फ़र्म करें`,
  newAccount: `एक नया अकाउंट बनाएँ`,
  loginAccount: `अपने अकाउंट को अनलॉक करें`,
  recoverExistingAccount: `मौजूदा खाते को हटाएँ`,
  recoverMnemonic: `स्मरक (वे 12 शब्द जो \nआपको अकाउंट बनाते समय दिखाए गए थे)`,
  recoverMnemonicLengthError: `स्मरक में ठीक 12 शब्द होने चाहिए`,
  successTitle: `हो गया`,
  errorTitle: `गलती हुई`,
  showMnemonic: `12-शब्द का स्मरक दिखाएँ`,
  mnemonicExhortation: `आपके अकाउंट को बहाल करने के लिए इस 12-शब्द के वाक्यांश की जरूरत होगी, कृपया इसे कहीं सुरक्षित रखें`,
  addressExhortation: `आप अपने बटुए का पता करने के लिए ETH या किसी समर्थित ईआरसी -20 टोकन भेज सकते हैं।`,
  removeAccountTitle: `क्या आप वाकई में इस डिवाइस से अपने अकाउंट को हटाना चाहते हैं?`,
  removeAccountExhortation: `आप अकाउंट को डिवाइस से परमानेंट रूप से हटा रहे हैं। सुनिश्चित कर लें कि बाद में अपने खाते बहाल करने के लिए यह स्मरक आपकी पहुँच में हो।`,
  myAccount: `मेरा अकाउंट`,
  setNickname: `कोई छोटा नाम (निकनेम) सेट करें ताकि आपके फ्रेंड आपकी सर्च कर सकें`,
  setEmail: `Lndr अपडेट प्राप्त करने के लिए कोई ई-मेल सेट करें`,
  nickname: `छोटा नाम (लोअरकेस और संख्याएँ)`,
  email: `ईमेल पता`,
  inviteLink: `लिंक को आमंत्रित करें`,
  sendToAddress: `एक पते पर भेजें`,
  splitExpense: `LNDR एप्लिकेशन पर मेरे साथ एक व्यय विभाजित`,
  sendInvite: `ईमेल या पाठ के माध्यम से भेजें`,
  unknownTransaction: `अज्ञात लेन-देन`,
  yourFriend: `तुम्हारा मित्र`,
  lndrVerified: {
    ok: `ठीक`,
    title: `अपने ग्राहक को आवश्यकताओं के बारे में जानें पूरा करके उच्च निपटान सीमा और क्रिप्टो वापसी मात्रा निर्धारित करें।`,
    statusTitle: `अपना सत्यापन की वर्तमान स्थिति है:`,
    tryAgain: `हम आपकी पहचान सत्यापित करने में असमर्थ थे। आपकी जानकारी को फिर से जमा और सुनिश्चित करें कि अपनी तस्वीरों को साफ हैं कृपया।`,
    formMessage: `निम्नलिखित क्षेत्रों के सभी भरें`,
    button: `अपनी पहचान सत्यापित करें`,
    prefix: `कैसे अपने व्यक्तिगत डेटा प्रबंधित किया जाएगा के लिए हमारी `,
    linkTitle: `गोपनीयता नीति`,
    postfix: ` पढ़ें।`,
    upload: `अपलोड एक सरकार `,
    governmentId: `द्वारा जारी पहचान`,
    selfie: `अपने सरकार द्वारा जारी पहचान के साथ एक स्वफ़ोटो अपलोड`,
    proofOfAddress: `पते का प्रमाण`,
    ifNotId: `(यदि नहीं ID)`,
    agree: `मैंने पढ़ा है और गोपनीयता `,
    agreeLink: `नीति से सहमत है`,
    success: `केवाईसी प्रस्तुत किया गया है।`,
    idInfoHeader: `आईडी के उदाहरण में शामिल हैं:`,
    passport: `पासपोर्ट`,
    drivers: `ड्राइवर का लाइसेंस`,
    national: `राष्ट्रीय पहचान पत्र`,
    addressInfoHeader: `पते के प्रमाण के उदाहरण:`,
    bank: `बैंक कथन`,
    utility: `उपयोगिता बिल`,
    other: `अन्य दस्तावेज़`,
    chooseGovernmentPhoto: `सरकार आईडी फोटो चुनें`,
    chooseSelfiePhoto: `सेल्फी फोटो चुनें`,
    chooseAddressPhoto: `पता फोटो का प्रमाण चुनें`,
    emailRequired: `आप अपनी पहचान सत्यापित करने के लिए एक ईमेल की जरूरत है, एक्स पर क्लिक करें "ई - मेल बदलें"`,
    approved: `मंजूर की`,
    rejected: `अस्वीकृत`,
    pending: `पेंडिंग`,
    error: generalCommunicationError,
    formFields: {
      firstName: `पहला नाम`,
      lastName: `अंतिम नाम`,
      street: `गली का पता`,
      city: `शहर`,
      state: `राज्य / प्रांत`,
      postalCode: `डाक कोड`,
      country: `देश चुनिए`,
      phone: `फ़ोन नंबर`,
      dob: `जन्म तिथि (YYYY-MM-DD)`,
    },
    formErrors: {
      firstName: `पहला नाम आवश्यक है`,
      lastName: `अंतिम नाम आवश्यक है`,
      street: `स्ट्रीट की आवश्यकता है`,
      city: `शहर आवश्यक है`,
      state: `राज्य / प्रांत की आवश्यकता है`,
      postalCode: `डाक कोड की आवश्यकता है`,
      country: `देश के लिए आवश्यक है`,
      phone: `फ़ोन नंबर की आवश्यकता है`,
      dob: `जन्म तिथि के लिए आवश्यक है`,
      general: `कृपया सुनिश्चित करें कि आप सभी फ़ील्ड भर लेने और संलग्न किया है सही तस्वीरें बनाने के`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `सरनेम कम से कम 3 अक्षरों का होना चाहिए।`,
      compositionViolation: `सरनेम में केवल संख्याएँ और छोटे अक्षर ही हो सकते हैं।`,
      duplicationViolation: `यह छोटा नाम किसी ने पहले ही ले लिया है`,
    },
    email: {
      compositionViolation: `ईमेल फॉर्मैट गलत है`,
      duplicationViolation: `ईमेल पहले ही कोई ले चुका है`,
    },
    pin: {
      lengthViolation: `पिन कम से कम 4 कैरक्टर का होना चाहिए।`,
      matchViolation: `पिन मेल खाने चाहिए।`,
      failedHashComparison: `पिन मान्य नहीं है, कृपया दोबारा प्रयास करें।`,
      updateSuccess: `आपकी पिन अपडेट हो गई`,
      updateError: `आपकी पिन अपडेट करने में कोई गलती हुई`,
    },
    mnemonic: {
      lengthViolation: `स्मरक में कम से कम 12 शब्द होने चाहिए।`,
      unableToValidate: `एंटर किया गया स्मरक मान्य नहीं है, कृपया दोबारा प्रयास करें।`,
    },
    setNickname: {
      success: `आपका छोटा नाम सेव कर लिया गया`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `आपकी ईमेल सेव कर ली गई`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `आपको अपना पिन`,
      bottom: `मिनट निष्क्रिय रहने के बाद एंटर करना होगा`,
      update: `अपडेट करें`,
      error: `हम आपकी अकाउंट सेटिंग्स अपडेट नहीं कर सके`,
      success: `लॉक टाइमआउट अपडेट किया गया`,
    },
    addFriend: {
      success: X => `फ्रेंड रिक्वेस्ट @${X}को भेजी गई`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `फ्रेंड्स से हटाया गया: @${X}`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `Eth बैलेन्स प्राप्त नहीं कर पा रहा`,
      manage: `ETH मैनेज करें`,
    },
    sendEth: {
      error: {
        insufficient: `आपके पास इस ट्रान्सफर के लिए पर्याप्त ETH नहीं हैं`,
        generic: `ट्रान्सफर में कुछ गड़बड़ी हुई है, कृपया दोबारा कोशिश करें`,
        address: `कृपया कोई मान्य पता डालें`,
        amount: `कोई 0 से अधिक राशि एंटर करें`,
        limitExceeded: (A, M) => `आप एक हफ्ते में केवल ${CUR(A)} ${TL(A, M)} भेज सकते हैं, कृपया कोई छोटी राशि चुनें`
      },
      amount: `भेजी जाने वाली राशि`,
      address: `गंतव्य पता`,
      transfer: `ट्रान्सफर ETH`,
      transferAll: `सब-कुछ ट्रान्सफर करें`,
      balance: Y => `आपका वर्तमान ETH बैलेन्स है ${typeof Y === 'string' ? Y.slice(0,8) :''}`,
      ethAddress: `Ethereum पता`,
      transferLowercase: `Eth ट्रान्सफर`,
      note: (A, M) => `कृपया नोट करें: आप हर हफ्ते केवल ${CUR(A)} ${TL(A, M)} ही Lndr से बाहर भेज सकते हैं`,
      warning: (Z, A, M) => `आपकी ${CUR(A)} ${TL(A, M)} लिमिट में ${CUR(A)}${Z} बाकी है`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `आपके पास इस ट्रान्सफर के लिए पर्याप्त ${name} नहीं हैं`,
        generic: `ट्रान्सफर में कोई गड़बड़ी हुई थी, बाद में दोबारा प्रयास करें`,
      },
      transfer: (name) => `ट्रान्सफर ${name}`,
      address: `गंतव्य पता`,
      balance: (name, balance) => `आपका वर्तमान ${name} बैलेन्स ${typeof balance === 'string' ? balance.slice(0,8) :''} हैं`,
      tokenAddress: (name) => `${name} पता`,
      txCost: (ethCost, currencyCost) => `लेनदेन लागत: ${ethCost} ETH (${currencyCost})`,
    },
    panelHeaders: [
      `बटुआ पता`,
      `अकाउंट डिलीट करें`,
      `ETH बैलेंस हिस्ट्री`,
      `पेपैल सक्षम करें`,
      `प्राथमिक मुद्रा परिवर्तित करें`,
      `अतिरिक्त सुविधाओं को अनलॉक`,
      `ई - मेल बदलें`,
      `पिन बदलिए`,
      `लॉक टाइमआउट बदलें`,
      `स्मरक`,
      `नोटिफिकेशन्स`,
    ],
    viewEtherscan: `Etherscan हिस्ट्री देखें`,
    profilePic: {
      change: `प्रोफ़ाइल फोटो बदलें`,
      setError: `आपकी फोटो अपलोड करने में कोई गलती हुई, कृपया बाद में दोबारा प्रयास करें`,
      getError: `आपकी प्रोफ़ाइल फोटो वापस लाने में कोई गलती हुई`,
      setSuccess: `प्रोफ़ाइल फोटो अपडेट हो गई`,
    },
    logoutSuccess: `आप लॉग-आउट हो गए हैं!`,
    logoutError: generalCommunicationError,
    addressWarning: `मैन्युअल रूप से एक पता दर्ज बचा जाना चाहिए। ऐसा अपने जोख़िम पर करें। हम misaddressed या खो हस्तांतरण के लिए जिम्मेदार नहीं हैं।`,
  },

  currentBalance: name => `आपका वर्तमान ${name} बैलेन्स`,

  welcomeView: {
    by: `निर्माता`,
    makeItEasy: `Lndr से आप सादे कर्जों को आसानी से ट्रैक कर सकते हैं`,
    weHelpFriends: `हम फ्रेंड्स के साथ रहने, काम करने और साथ में मस्ती करने को आसान बनाते हैं।`,
    len: `Len`,
    dot: `।`,
    der: `der`,
    shareDinner: `डिनर शेयर करें`,
    fillTank: `अपनी टंकी भरें`,
    travelTogether: `साथ में ट्रैवल करें`,
    runEthereum: `हम ETH पर चलते हैं!`,
    firstLendingApp: `ब्लॉकचेन पर सिक्योर किया गया सबसे पहला मोबाइल उधार एप्लिकेशन।`,
    greatConcert: `कोई बढ़िया कॉन्सर्ट देखें`,
    youPlayWithFriends: `आप दोस्तों के साथ मस्ती करें, \nहिसाब हम रखेंगे...`,
    start: `शुरू करें`,
  },

  walkthrough: {
    skip: `छोड़ें`,
    continue: `जारी रहना`,
    step1: {
      easyToUse: `Lndr बिल, शेयर खर्चों विभाजित है और मित्रों और परिवार के साथ सरल ऋण का निपटान, सभी blockchain पर सुरक्षित रूप से किया सबसे आसान तरीका है।`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `Lndr के साथ आरंभ करने के लिए, आप एक दोस्त जोड़ने की आवश्यकता होगी।`,
      friendsScreen: `, के लिए खोज जोड़ सकते हैं या Lndr पर कनेक्ट करने के लिए अपने मित्रों और परिवार को आमंत्रित करने के मित्र स्क्रीन पर जाएँ।`,
    },
    step3: {
      title: `किसी लेन-देन रिकॉर्डिंग`,
      easy: `एक बिल बांटने या एक दोस्त के साथ एक ऋण जोड़ने Lndr में आसान है!`,
      selectFriend: `अपने दोस्त, अपने मुद्रा और राशि का चयन करें।`,
      addMemo: `ज्ञापन बॉक्स में कुछ नोट जोड़ें और सबमिट करें क्लिक करें।`,
    },
    step4: {
      title: `निपटान करें`,
      ready: `निपटान करेंके लिए तैयार?`,
      payPal: `जब यह Lndr के साथ व्यवस्थित करने के लिए समय आ गया है, \n- आप पेपैल चुन सकते हैं:`,
      ether: `- ईथर की तरह cryptocurrencies:`,
      cash: `- या बस एक नकदी निपटान रिकॉर्ड:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `बहु मुद्रा`,
      multiCurrency: `Lndr अपने लेनदेन का ट्रैक भले ही वे अलग-अलग मुद्राओं में होने रख सकते हैं।`,
      exchangeRate: `जब आप अपने दोस्त के साथ निपटान करने का फैसला, सभी लेनदेन सबसे अप-टू-डेट विनिमय दरों उपलब्ध का उपयोग कर अपने प्राथमिक मुद्रा में परिवर्तित कर दिया जाएगा।`,
      start: `Lndr का प्रयोग शुरू करें!`,
    }
  },

  debtManagement: {
    shell: `नया ट्रैंज़ैक्शन`,
    add: `कर्ज जोड़ें`,
    selectFriend: `चुनें`,
    lend: `नया लोन`,
    borrow: `नया कर्ज`,
    owesMe: `मुझे उससे लेना है`,
    iOwe: `मैं कर्जदार`,
    iLent: `मुझे एक फ्रेंड से लेना है`,
    iBorrowed: `मुझे एक फ्रेंड को देना है`,
    settleUpLower: `निपटान करें`,
    amountToSettle: `निपटान करने की राशि`,
    total: `कुल`,
    record: `रिकॉर्ड`,
    records: `रिकॉर्ड्स`,
    chooseCurrency: `एक मुद्रा चुनें`,

    createError: {
      amountTooLow: `राशि $0 से ज़्यादा होनी चाहिए`,
      amountTooHigh: `राशि कम से कम $ 1,000,000,000  होना चाहिए`,
      selfAsFriend: `आप खुद के साथ कर्ज नहीं बना सकते, कोई और फ्रेंड चुनें`,
      pending: `नया ट्रैंज़ैक्शन शुरू करने से पहले इस यूज़र से अपने पुराने ट्रैंज़ैक्शन का निपटान करें`,
      insufficientEth: E => `आपको निपटान करने के लिए कम से कम ${E} चाहिए, अपना बैलेन्स देखने के लिए सेटिंग्स पर जाएँ`,
    },
    fields: {
      currency: `मुद्रा`,
      amount: `राशि`,
      settlementAmount: `निपटान राशि`,
      selectFriend: `फ्रेंड`,
      memo: `मेमो`,
      direction: `सही कथन का चयन करें`,
    },
    memo: {
      example: `मेमो यहाँ टाइप करें`,
    },
    direction: {
      lend: X => `मुझे ${X} से लेना है`,
      borrow: X => `मुझे ${X} को देना है`,
      initiatedLend: X => `${X} का कहना है कि उसे आपको देना है`,
      initiatedBorrow: X => `${X} का कहना है कि आपको देना है`,
      pendingLend: X => `@${X} को आपको देना`,
      pendingBorrow: X => `आपको @${X} को देना है`,
      settlement: settlement => `${settlement.settlementCurrency} Settlement`,
      pendingLendSettlement: S => `@${S.debtorNickname} ने ${S.settlementCurrency} में निपटान की रिक्वेस्ट की है`,
      pendingBorrowSettlement: S => `@${S.creditorNickname} आपसे ${S.settlementCurrency} में निपटान करना चाहते हैं`,
      pendingLendSettlementMe: S => `आपने @${S.debtorNickname} से ${S.settlementCurrency} में निपटान की रिक्वेस्ट की है`,
      pendingBorrowSettlementMe: S => `आपने रिक्वेस्ट की है कि @${S.creditorNickname} ${S.settlementCurrency} में निपटान करें`,
    },
    pending: {
      success: F => `पेंडिंग कर्ज @${F.nickname} को सब्मिट कर दिया गया`,
      error: generalCommunicationError
    },
    pendingParens: `(पेंडिंग)`,
    confirmation: {
      transaction: CP => `${CP} वाला ट्रैंज़ैक्शन कन्फ़र्म हो गया है`,
      settlement: CP => `${CP} वाला निपटान कन्फ़र्म हो गया है`,
      error: `इस समय ट्रैंज़ैक्शन की पुष्टि करने में असमर्थ है,  कृपया बाद में दोबारा प्रयास करें`,
    },
    rejection: {
      success: `ट्रैंज़ैक्शन रिजेक्ट हो गया है`,
      error: `इस समय ट्रैंज़ैक्शन को रिजेक्ट करने में असमर्थ है, कृपया बाद में दोबारा प्रयास करें`,
    },
    balances: {
      error: `इस समय बैलेंस लोड करने में असमर्थ है, कृपया दोबारा प्रयास करें`,
    },
    for: M => `${M} के लिए`,
    settleUp: `निपटाएँ`,
    settleTotal: `कुल निपटान करें`,
    settleUpMemo: (D, A) => ` ${A} ${D === 'lend' ? 'में निपटान करना' :  'में निपटान के लिए रिक्वेस्ट करें'}`,
    recordSettleUpMemo: `निपटाना`,
    balanceByCurrency: `विवरण`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `${X} से आपका निपटान नहीं हो पाया क्योंकि राशि पर्याप्त नहीं थी`,
        generic: X => `${X} से आपका निपटान पूरा करते समय कोई गलती हुई`,
      }
    },
    eth: `ETH से निपटाएँ`,
    erc20: name => `Settle with ${name}`,
    paypal: `PayPal से निपटाएँ`,
    nonPayment: `कोई निपटान रिकॉर्ड करें`,
    select: `चुनें निपटान प्रकार`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `होम`,
    friends: `फ्रेंड्स`,
    activity: `एक्टिविटी`,
  },

  notifications: {
    toggleNotifications: `नोटिफिकेशन टॉगल करें`,
    enable: `चालू करें`,
    disable: `बंद करें`,
  },

  pendingTransactionsLanguage: {
    shell: `पेंडिंग ट्रैंज़ैक्शन`,
    title: `पेंडिंग`,
    memo: `मेमो:`,
    for: `इनके लिए`,
    none: `आपके कोई पेंडिंग ट्रैंज़ैक्शन नहीं हैं`,
    confirmationQuestion: `क्या आप वाकई में इस ट्रैंज़ैक्शन को कन्फ़र्म करना चाहते हैं?`,
    pendingAnnouncement: `यह ट्रैंज़ैक्शन थर्ड-पार्टी के कन्फ़र्मेशन का इंतज़ार कर रहा है।`,
    bilateral: `ट्रान्सफर पूरा होने का इंतज़ार कर रहा है`,
    confirm: `कन्फ़र्म करें`,
    reject: `ट्रैंज़ैक्शन रिजेक्ट करें`,
    rejectRequest: `रिजेक्ट करें`,
    cancel: `ट्रैंज़ैक्शन कैन्सल करें`,
    direction: {
      lend: (X, Z) => `@${X} से आपको ${Z} लेना है`,
      borrow: (X, Z) => `आपको @${X} को ${Z} देना है`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `निपटान लंबित है`,
    title: `पेंडिंग है`,
    none: `आपके कोई पेंडिग निपटान नहीं हैं`,
    confirm: `कन्फ़र्म करें`,
    reject: `निपटान रिजेक्ट करें`,
    cancel: `निपटान कैन्सल करें`,
  },

  recentTransactionsLanguage: {
    title: `पूरा हो गया`,
    none: `आपके पास कोई पूरे किए गए ट्रैंज़ैक्शन नहीं हैं`,
    direction: {
      lend: (X, Z) => `@${X} को आपको ${Z} देना है`,
      borrow: (X, Z) => `आपको @${X} को ${Z} देना है`
    },
    balance: `बैलेन्स`,
    consolidatedBalance: `बैलेन्स`,
    friends: FS => `(${FS} फ्रेंड्स से)`,
  },

  tabs: {
    home: `होम `,
    friends: `फ्रेंड्स`,
    activity: `एक्टिविटी`,
  },

  confirmation: {
    shell: `कन्फ़र्मेशन`,
    done: `हो गया`,
    create: {
      start: `हमने कन्फ़र्म करने के लिए `,
      end: ` को रिकॉर्ड भेज दिया है।`,
    },
    confirm: {
      start: `आपने `,
      end: ` से इस रिकॉर्ड को कन्फ़र्म किया है।`,
    },
    reject: {
      start: `हमने `,
      end: ` को बता दिया है कि आपने यह रिकॉर्ड रिजेक्ट कर दिया है।`,
    },
    confirmFriend: {
      start: `अब आप `,
      end: ` के फ्रेंड हैं!`,
    },
    rejectFriend: {
      start: `आपने `,
      end: ` की फ्रेंड रिक्वेस्ट अस्वीकार दी है।`,
    },
    rejectOutboundFriendRequest: {
      start: `आप `,
      end: ` को मित्र अनुरोध रद्द कर दिया है.`,
    },
    ethSent: {
      start: `आपने `,
      end: ` ETH भेज दिये हैं और आपका ट्रैंज़ैक्शन हैश `,
    },
    erc20Sent: {
      start: `आपने `,
      end: ` भेज दिए हैं और आपका ट्रैंज़ैक्शन हैश `,
    },
    requestPayPalPayee: {
      start: `हम `,
      end: ` जानते हैं कि आप पेपैल के साथ व्यवस्थित करना चाहते हैं है।`,
    },
    requestPayPalPayment: {
      start: `हम `,
      end: ` जानते हैं कि आप पेपैल के साथ भुगतान किया जाना चाहते हैं गए हैं।`,
    },
    settledWithPayPal: {
      start: `हम `,
      end: ` जानते हैं कि आप पेपैल के साथ बसे कर दिया है है।`,
    },
    kycSuccess: {
      start: `धन्यवाद! आपके खाते का सत्यापन किया जा रहा है।

      `,
      end: `जब आपके अतिरिक्त सुविधाओं अनलॉक हैं आपको सूचित किया जाएगा।`
    },
    status: `आप इस ट्रैंज़ैक्शन का स्टेटस एक्टिविटी टैब `,
    activity: `में देख सकते हैं।`,
  },

  pendingFriendRequestsLanguage: {
    shell: `फ्रेंड रिक्वेस्ट`,
    message: `फ्रेंड रिक्वेस्ट्स`,
    request: F => `@${F} आपका फ्रेंड बनना चाहता/चाहती है!`,
    outbound: F => `आप @${F} को मित्र अनुरोध भेजा`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `नीचे क्लिक करके आप पुष्टि करते हैं कि आपने ब्लॉकमसन गोपनीयता नीति को पढ़ और सहमति दी है। ब्लॉकमेसन ब्लॉकमसन और एलएनडीआर के बारे में अपडेट भेजने के लिए आपके ईमेल पते का उपयोग कर सकता है। गोपनीयता नीति का एक लिंक यहां दिया गया है:`,
  },

  payPalLanguage: {
    connectPayPal: `पेपैल कनेक्ट करें`,
    connectSuccess: `पेपैल को सफलतापूर्वक सक्षम।`,
    disconnectPayPal: `डिस्कनेक्ट पेपैल`,
    disconnected: `पेपैल काट दिया।`,
    requestPayPalPayment: `अनुरोध पेपैल भुगतान`,
    sendWithPayPal: `पेपैल के साथ भेजें`,
    enablePayPal: `पेपैल सक्षम करें`,
    requestPayPalPayee: `पेपैल का अनुरोध करें`,
    enablePayPalForFriend: F => `पेपैल को सक्षम करने से आपको @${F} भुगतान करने की अनुमति मिलती है।`,
    friendNotEnabled: F => `@${F} पेपैल भुगतान सक्षम नहीं किया है।`,
    friendRequestedConnect: F => `@${F} पेपैल के माध्यम से आपको भुगतान करना चाहता है`,
    requestFriendConnect: F => `आपने पेपैल को सक्षम करने के लिए @${F} पूछा`,
    feesNotification: `पेपैल फीस शामिल नहीं है`,
    feesInformationHeader: `PayPal शुल्क सूचना`,
    feesInformation: `1. अपने पेपैल खाते में एक बैंक खाते से जुड़ा हुआ होना चाहिए।
    
2. एक मुद्रा अपने बैंक की मुद्रा से भिन्न में पेइंग एक $ 0.35 शुल्क देना पड़ेगा।

3. अंतर्राष्ट्रीय हस्तांतरण शुल्क:
    कनाडा / यूरोप करने के लिए संयुक्त राज्य अमरीका: $ 2.99
    कहीं और करने के लिए संयुक्त राज्य अमरीका: $ 4.99

4. ये शुल्क व्यापक नहीं हैं। सबसे अद्यतन जानकारी के लिए कृपया पर जाएँ:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `अफ़ग़ानिस्तान`, code: 'AFG' },
    { name: `अल्बानिया`, code: 'ALB' },
    { name: `एलजीरिया`, code: 'DZA' },
    { name: `अंडोरा`, code: 'AND' },
    { name: `अंगोला`, code: 'AGO' },
    { name: `एंगुइला`, code: 'AIA' },
    { name: `अंटार्कटिका`, code: 'ATA' },
    { name: `अंतिगुया और बार्बूडा`, code: 'ATG' },
    { name: `अर्जेंटीना`, code: 'ARG' },
    { name: `आर्मीनिया`, code: 'ARM' },
    { name: `अरूबा`, code: 'ABW' },
    { name: `ऑस्ट्रेलिया`, code: 'AUS' },
    { name: `ऑस्ट्रिया`, code: 'AUT' },
    { name: `आज़रबाइजान`, code: 'AZE' },
    { name: `बहामा`, code: 'BHS' },
    { name: `बहरीन`, code: 'BHR' },
    { name: `बांग्लादेश`, code: 'BGD' },
    { name: `बारबाडोस`, code: 'BRB' },
    { name: `बेलोरूस`, code: 'BLR' },
    { name: `बेल्जियम`, code: 'BEL' },
    { name: `बेलीज`, code: 'BLZ' },
    { name: `बेनिन`, code: 'BEN' },
    { name: `बरमूडा`, code: 'BMU' },
    { name: `भूटान`, code: 'BTN' },
    { name: `बोलीविया`, code: 'BOL' },
    { name: `बोस्निया और हर्जेगोविना`, code: 'BIH' },
    { name: `बोत्सवाना`, code: 'BWA' },
    { name: `ब्राज़िल`, code: 'BRA' },
    { name: `ब्रुनेई`, code: 'BRN' },
    { name: `बुल्गारिया`, code: 'BGR' },
    { name: `बुर्किना फासो`, code: 'BFA' },
    { name: `बुस्र्न्दी`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `कंबोडिया`, code: 'KHM' },
    { name: `कैमरून`, code: 'CMR' },
    { name: `कनाडा`, code: 'CAN' },
    { name: `केमैन टापू`, code: 'CYM' },
    { name: `केंद्रीय अफ्रीकन गणराज्य`, code: 'CAF' },
    { name: `काग़ज़ का टुकड़ा`, code: 'TCD' },
    { name: `चिली`, code: 'CHL' },
    { name: `चीन`, code: 'CHN' },
    { name: `कोलम्बिया`, code: 'COL' },
    { name: `कोमोरोस`, code: 'COM' },
    { name: `कांगो`, code: 'COG' },
    { name: `कांगो`, code: 'COD' },
    { name: `कुक द्वीपसमूह`, code: 'COK' },
    { name: `कोस्टा रिका`, code: 'CRI' },
    { name: `कोटे डी आइवर`, code: 'CIV' },
    { name: `क्रोएशिया`, code: 'HRV' },
    { name: `क्यूबा`, code: 'CUB' },
    { name: `कुराकाओ`, code: 'CUW' },
    { name: `साइप्रस`, code: 'CYP' },
    { name: `Czechia`, code: 'CZE' },
    { name: `डेनमार्क`, code: 'DNK' },
    { name: `जिबूती`, code: 'DJI' },
    { name: `डोमिनिका`, code: 'DMA' },
    { name: `डोमिनिकन गणराज्य`, code: 'DOM' },
    { name: `इक्वेडोर`, code: 'ECU' },
    { name: `मिस्र`, code: 'EGY' },
    { name: `एल साल्वाडोर`, code: 'SLV' },
    { name: `भूमध्यवर्ती गिनी`, code: 'GNQ' },
    { name: `इरिट्रिया`, code: 'ERI' },
    { name: `एस्तोनिया`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `इथियोपिया`, code: 'ETH' },
    { name: `फ़िजी`, code: 'FJI' },
    { name: `फिनलैंड`, code: 'FIN' },
    { name: `फ्रांस`, code: 'FRA' },
    { name: `फ्रेंच गयाना`, code: 'GUF' },
    { name: `फ्रेंच पॉलीनेशिया`, code: 'PYF' },
    { name: `गैबॉन`, code: 'GAB' },
    { name: `गाम्बिया`, code: 'GMB' },
    { name: `जॉर्जिया`, code: 'GEO' },
    { name: `जर्मनी`, code: 'DEU' },
    { name: `घाना`, code: 'GHA' },
    { name: `जिब्राल्टर`, code: 'GIB' },
    { name: `यूनान`, code: 'GRC' },
    { name: `ग्रीनलैंड`, code: 'GRL' },
    { name: `ग्रेनेडा`, code: 'GRD' },
    { name: `ग्वाडेलोप`, code: 'GLP' },
    { name: `गुआम`, code: 'GUM' },
    { name: `ग्वाटेमाला`, code: 'GTM' },
    { name: `गिन्नी`, code: 'GIN' },
    { name: `गिनी-बिसाऊ`, code: 'GNB' },
    { name: `गुयाना`, code: 'GUY' },
    { name: `हैती`, code: 'HTI' },
    { name: `वेटिकन`, code: 'VAT' },
    { name: `होंडुरस`, code: 'HND' },
    { name: `हॉगकॉग`, code: 'HKG' },
    { name: `हंगरी`, code: 'HUN' },
    { name: `आइसलैंड`, code: 'ISL' },
    { name: `इंडिया`, code: 'IND' },
    { name: `इंडोनेशिया`, code: 'IDN' },
    { name: `ईरान`, code: 'IRN' },
    { name: `इराक`, code: 'IRQ' },
    { name: `आयरलैंड`, code: 'IRL' },
    { name: `मैन द्वीप`, code: 'IMN' },
    { name: `इजराइल`, code: 'ISR' },
    { name: `इटली`, code: 'ITA' },
    { name: `जमैका`, code: 'JAM' },
    { name: `जापान`, code: 'JPN' },
    { name: `जॉर्डन`, code: 'JOR' },
    { name: `कजाखस्तान`, code: 'KAZ' },
    { name: `केन्या`, code: 'KEN' },
    { name: `किरिबाती`, code: 'KIR' },
    { name: `कोरिया (डीपीआरके)`, code: 'PRK' },
    { name: `कोरिया (ROK)`, code: 'KOR' },
    { name: `कुवैट`, code: 'KWT' },
    { name: `किर्गिज़स्तान`, code: 'KGZ' },
    { name: `लाओस`, code: 'LAO' },
    { name: `लातविया`, code: 'LVA' },
    { name: `लेबनान`, code: 'LBN' },
    { name: `लिसोटो`, code: 'LSO' },
    { name: `लाइबेरिया`, code: 'LBR' },
    { name: `लीबिया`, code: 'LBY' },
    { name: `लिकटेंस्टीन`, code: 'LIE' },
    { name: `लिथुआनिया`, code: 'LTU' },
    { name: `लक्समबर्ग`, code: 'LUX' },
    { name: `मकाओ`, code: 'MAC' },
    { name: `मैसेडोनिया`, code: 'MKD' },
    { name: `मेडागास्कर`, code: 'MDG' },
    { name: `मलावी`, code: 'MWI' },
    { name: `मलेशिया`, code: 'MYS' },
    { name: `मालदीव`, code: 'MDV' },
    { name: `माली`, code: 'MLI' },
    { name: `माल्टा`, code: 'MLT' },
    { name: `मार्शल द्वीप समूह`, code: 'MHL' },
    { name: `मार्टीनिक`, code: 'MTQ' },
    { name: `मॉरिटानिया`, code: 'MRT' },
    { name: `मॉरीशस`, code: 'MUS' },
    { name: `मेक्सिको`, code: 'MEX' },
    { name: `माइक्रोनेशिया`, code: 'FSM' },
    { name: `मोलदोवा`, code: 'MDA' },
    { name: `मोनाको`, code: 'MCO' },
    { name: `मंगोलिया`, code: 'MNG' },
    { name: `मोंटेनेग्रो`, code: 'MNE' },
    { name: `मोंटेसेराट`, code: 'MSR' },
    { name: `मोरक्को`, code: 'MAR' },
    { name: `मोजाम्बिक`, code: 'MOZ' },
    { name: `म्यांमार`, code: 'MMR' },
    { name: `नामीबिया`, code: 'NAM' },
    { name: `नाउरू`, code: 'NRU' },
    { name: `नेपाल`, code: 'NPL' },
    { name: `नीदरलैंड`, code: 'NLD' },
    { name: `न्यू कैलेडोनिया`, code: 'NCL' },
    { name: `न्यूजीलैंड`, code: 'NZL' },
    { name: `निकारागुआ`, code: 'NIC' },
    { name: `नाइजर`, code: 'NER' },
    { name: `नाइजीरिया`, code: 'NGA' },
    { name: `नियू`, code: 'NIU' },
    { name: `उत्तरी मरीयाना द्वीप समूह`, code: 'MNP' },
    { name: `नॉर्वे`, code: 'NOR' },
    { name: `ओमान`, code: 'OMN' },
    { name: `पाकिस्तान`, code: 'PAK' },
    { name: `पलाऊ`, code: 'PLW' },
    { name: `फिलिस्तीन`, code: 'PSE' },
    { name: `पनामा`, code: 'PAN' },
    { name: `पापुआ न्यू गिनी`, code: 'PNG' },
    { name: `परागुआ`, code: 'PRY' },
    { name: `पेरू`, code: 'PER' },
    { name: `फिलीपींस`, code: 'PHL' },
    { name: `पिटकेर्न`, code: 'PCN' },
    { name: `पोलैंड`, code: 'POL' },
    { name: `पुर्तगाल`, code: 'PRT' },
    { name: `प्यूर्टो रिको`, code: 'PRI' },
    { name: `कतर`, code: 'QAT' },
    { name: `रियूनियन`, code: 'REU' },
    { name: `रोमानिया`, code: 'ROU' },
    { name: `रूसी संघ`, code: 'RUS' },
    { name: `रवांडा`, code: 'RWA' },
    { name: `सेंट बार्थेलेमी`, code: 'BLM' },
    { name: `सेंट हेलेना, असेंशन और त्रिस्तान दा कुन्हा`, code: 'SHN' },
    { name: `संत किट्ट्स और नेविस`, code: 'KNA' },
    { name: `सेंट लूसिया`, code: 'LCA' },
    { name: `संत मार्टिन`, code: 'MAF' },
    { name: `सेंट पियरे और मिकेलॉन`, code: 'SPM' },
    { name: `संत विंसेंट अँड थे ग्रेनडीनेस`, code: 'VCT' },
    { name: `समोआ`, code: 'WSM' },
    { name: `सैन मैरीनो`, code: 'SMR' },
    { name: `साओ टोमे और प्रिंसिपे`, code: 'STP' },
    { name: `सऊदी अरब`, code: 'SAU' },
    { name: `सेनेगल`, code: 'SEN' },
    { name: `सर्बिया`, code: 'SRB' },
    { name: `सेशेल्स`, code: 'SYC' },
    { name: `सियरा लिओन`, code: 'SLE' },
    { name: `सिंगापुर`, code: 'SGP' },
    { name: `सिंट मार्टेन`, code: 'SXM' },
    { name: `स्लोवाकिया`, code: 'SVK' },
    { name: `स्लोवेनिया`, code: 'SVN' },
    { name: `सोलोमन इस्लैंडस`, code: 'SLB' },
    { name: `सोमालिया`, code: 'SOM' },
    { name: `दक्षिण अफ्रीका`, code: 'ZAF' },
    { name: `दक्षिण सूडान`, code: 'SSD' },
    { name: `स्पेन`, code: 'ESP' },
    { name: `श्री लंका`, code: 'LKA' },
    { name: `सूडान`, code: 'SDN' },
    { name: `सूरीनाम`, code: 'SUR' },
    { name: `स्वीडन`, code: 'SWE' },
    { name: `स्विट्जरलैंड`, code: 'CHE' },
    { name: `सीरियाई अरब गणराज्य`, code: 'SYR' },
    { name: `ताइवान`, code: 'TWN' },
    { name: `तजाकिस्तान`, code: 'TJK' },
    { name: `तंजानिया`, code: 'TZA' },
    { name: `थाईलैंड`, code: 'THA' },
    { name: `तिमोर-लेस्ते`, code: 'TLS' },
    { name: `जाना`, code: 'TGO' },
    { name: `टोकेलाऊ`, code: 'TKL' },
    { name: `टोंगा`, code: 'TON' },
    { name: `त्रिनिदाद और टोबैगो`, code: 'TTO' },
    { name: `ट्यूनीशिया`, code: 'TUN' },
    { name: `तुर्की`, code: 'TUR' },
    { name: `तुर्कमेनिस्तान`, code: 'TKM' },
    { name: `तुर्क्स और कैकोज़ द्वीपसमूह`, code: 'TCA' },
    { name: `तुवालु`, code: 'TUV' },
    { name: `युगांडा`, code: 'UGA' },
    { name: `यूक्रेन`, code: 'UKR' },
    { name: `संयुक्त अरब अमीरात`, code: 'ARE' },
    { name: `यूनाइटेड किंगडम`, code: 'GBR' },
    { name: `संयुक्त राज्य अमरीका`, code: 'USA' },
    { name: `संयुक्त राज्य अमेरिका के छोटे दूरस्थ द्वीपसमूह`, code: 'UMI' },
    { name: `उरुग्वे`, code: 'URY' },
    { name: `उज़्बेकिस्तान`, code: 'UZB' },
    { name: `वानुअतु`, code: 'VUT' },
    { name: `वेनेजुएला`, code: 'VEN' },
    { name: `वियतनाम`, code: 'VNM' },
    { name: `ब्रिटिश वर्जिन आइसलैण्ड्स`, code: 'VGB' },
    { name: `यूएस वर्जिन द्वीप`, code: 'VIR' },
    { name: `पश्चिमी सहारा`, code: 'ESH' },
    { name: `यमन`, code: 'YEM' },
    { name: `जाम्बिया`, code: 'ZMB' },
    { name: `जिम्बाब्वे`, code: 'ZWE' },
  ]
}
