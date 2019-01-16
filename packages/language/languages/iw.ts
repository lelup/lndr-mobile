import { currencySymbols, transferLimits } from 'lndr/currencies'

const CUR = currencySymbols
const TL = transferLimits

const generalCommunicationError = 'הייתה בעיה בזמן ההתקשורת עם השרת, אנא נסה שוב מאוחר יותר'

export default {

  applicationName: `Lndr`,
  helloWorld: `שלום עולם`,
  noConnection: `אין חיבור`,
  retry: `נסה שוב`,
  submit: `לשלוח`,
  next: `הבא`,
  cancel: `לבטל`,
  back: `לחזור`,
  copy: `להעתיק ללוח`,
  confirmAccount: `לאשר`,
  createAccount: `ליצור חשבון`,
  recoverAccount: `לשחזר חשבון`,
  removeAccount: `להסיר חשבון`,
  updateAccount: `לעדכן חשבון`,
  loginAction: `לבטל נעילה`,
  enterPin: `אנא הזן את קוד ה- PIN שלך`,
  changePin: `לשנות PIN`,
  enterCurrentPin: `הזן PIN נוכחי`,
  logoutAction: `להתנתק`,
  seeAllActivity: `צפייה בכל הפעולות`,
  copiedClipboard: `הועתק ללוח`,
  pleaseWait: `המתן בבקשה`,
  addFriend: `הוסף חבר`,
  addFriendConfirmationQuestion: `האם אתה בטוח שברצונך להוסיף משתמש זה כחבר?`,
  removeFriend: `להסיר חבר`,
  currentFriends: `חברים נוכחיים`,
  removeFriendConfirmationQuestion: `האם אתה בטוח שברצונך להסיר משתמש זה כחבר?`,
  inviteFriends: `להזמין חברים ל-Lndr`,
  tryLndr: `נסה את אפליקצית Lndr כאן:`,
  friendInfo: `מידע נוסף על הידידות הזאת:`,
  noFriends: `הוסף כמה חברים כדי להתחיל!`,
  noMatches: `לא נמצאו משתמשים מתאימים`,
  noBalances: `אין לך חובות רשומים`,
  addFriendButton: `הוסף חבר`,
  alreadyFriendsButton: `חברים`,
  friendShell: `חבר`,
  tip: `עצה`,
  notice: `הודעה:`,
  welcome: `ברוכים הבאים ל-LNDR שלך`,
  noBalanceWarning: `לא הצלחנו לטעון את יתרתך בשלב זה, אנא נסה שוב מאוחר יותר.`,
  totalBalance: `סה"כ יתרה:`,
  totalBalances: `סה"כ צדדים:`,
  newTransaction: `עסקה חדשה`,
  needsReview: `ממתין לאישור`,
  owesMe: `אני חייב`,
  iOwe: `אני חייב למישהו`,
  newPassword: `סיסמה חדשה (8 תווים לפחות)`,
  confirmPassword: `אישור סיסמה`,
  newPin: `  בן 4 ספרות חדש PIN`,
  enterNewPin: `  בן 4 ספרות חדש PIN הגדר`,
  confirmPin: `אנא אשר את ה- PIN שלך`,
  newAccount: `צור חשבון חדש`,
  loginAccount: `בטל את נעילת החשבון שלך`,
  recoverExistingAccount: `לשחזר חשבון קיים`,
  recoverMnemonic: `רמז (12 מילות מוצגות \n כאשר יצרת את חשבונך)`,
  recoverMnemonicLengthError: `על הרמז להיות בעל 12 מילים בדיוק`,
  successTitle: `הצלחה`,
  errorTitle: `שגיאה`,
  showMnemonic: `להציג רמז בעל 12 מילים`,
  mnemonicExhortation: `ביטוי בעל 12 מילים זה נדרש כדי לשחזר את חשבונך, יש לשמור אותו במקום סודי ובטוח`,
  addressExhortation: `אתה יכול לשלוח ETH או כל אסימון ERC-20 נתמך לכתובת הארנק שלך.`,
  removeAccountTitle: `האם אתה בטוח שברצונך להסיר את חשבונך ממכשיר זה?`,
  removeAccountExhortation: `ודא שיש לך גישה לרמז שלך בכדי שתוכל לשחזר את חשבונך מאוחר יותר, שכן פרטי חשבונך יוסרו לצמיתות ממכשיר זה.`,
  myAccount: `החשבון שלי`,
  setNickname: `הגדר כינוי כדי שחבריך יוכלו למצוא אותך`,
  setEmail: `הגדר דואר אלקטרוני כדי שתוכל לקבל מידע על עדכונים ב-Lndr`,
  nickname: `כינוי (אותיות קטנות & מספרים)`,
  email: `כתובת דוא"ל`,
  inviteLink: `קישור זמן`,
  sendToAddress: `שלח לכתובת`,
  splitExpense: `פיצול הוצאה איתי על האפליקציה LNDR`,
  sendInvite: `שלח בדוא"ל או בטקסט`,
  unknownTransaction: `עסקה לא ידועה`,
  yourFriend: `חבר שלך`,
  lndrVerified: {
    ok: `בסדר`,
    title: `גדר נסיגה נסתר גבול יישוב גבוהה כמויות ידי השלמת לדעת דרישות הלקוח שלך.`,
    statusTitle: `הסטטוס הנוכחי של האימות הוא:`,
    tryAgain: `לא הצלחנו לאמת את זהותך. שלח שוב את המידע שלך ולהבטיח כי התמונות שלך תהיינה קריאות.`,
    formMessage: `יש למלא את כל השדות הבאים`,
    button: `אמת את זהותך`,
    prefix: `קראו את `,
    linkTitle: `מדיניות הפרטיות `,
    postfix: `לגבי איך הנתונים האישיים שלך ינוהלו.`,
    upload: `העלה `,
    governmentId: `תעודת זהות רשמית`,
    selfie: `עלה סלף עם תעודת הזהות הרשמית שלך`,
    proofOfAddress: `הוכחת כתובת`,
    ifNotId: `(אם לא זהה)`,
    agree: `קראתי ואני מסכים לתנאי `,
    agreeLink: `מדיניות הפרטיות`,
    success: `KYC הוגשה.`,
    idInfoHeader: `דוגמאות מזהות כוללות:`,
    passport: `דַרכּוֹן`,
    drivers: `רשיון נהיגה`,
    national: `תעודת זהות לאומית`,
    addressInfoHeader: `דוגמאות של הוכחת כתובת:`,
    bank: `הצהרה בנקאית`,
    utility: `Utility Bill`,
    other: `מסמך אחר`,
    chooseGovernmentPhoto: `בחר תמונה מזהה הממשלה`,
    chooseSelfiePhoto: `בחר תמונה הסלפי`,
    chooseAddressPhoto: `בחר הוכחת תמונת כתובת`,
    emailRequired: `אתה צריך אימייל כדי לאמת את זהותך, אנא לחץ על  "לדנות דוא"ל"`,
    approved: `אושר`,
    rejected: `נִדחֶה`,
    pending: `בהמתנה`,
    error: generalCommunicationError,
    formFields: {
      firstName: `שם פרטי`,
      lastName: `שם משפחה`,
      street: `כתובת רחוב`,
      city: `עִיר`,
      state: `מדינה / מחוז`,
      postalCode: `מיקוד`,
      country: `בחר מדינה`,
      phone: `מספר טלפון`,
      dob: `תאריך לידה (DD-MM-DD)`,
    },
    formErrors: {
      firstName: `נדרש שם פרטי`,
      lastName: `יש לציין שם משפחה`,
      street: `הרחוב נדרש`,
      city: `יש להזין עיר`,
      state: `מדינה / מחוז נדרש`,
      postalCode: `מיקוד נדרש`,
      country: `המדינה נדרשת`,
      phone: `נדרש מספר טלפון`,
      dob: `תאריך הלידה נדרש`,
      general: `אנא ודא שמלאת את כל השדות בצירוף התמונות הנכונות`,
    }
  },
  accountManagement: {
    nickname: {
      lengthViolation: `על הכינוי להיות בעל 3 תווים לפחות.`,
      compositionViolation: `על הכינוי להכיל מספרים ואותיות קטנות בלבד.`,
      duplicationViolation: `הכינוי כבר תפוס`,
    },
    email: {
      compositionViolation: `פורמט דוא"ל שגוי`,
      duplicationViolation: `כתובת הדוא"ל כבר תפוס`,
    },
    pin: {
      lengthViolation: `על ה-PIN להיות בעל 4 תווים לפחות.`,
      matchViolation: `על ה-PIN להיות תואם.`,
      failedHashComparison: ` .לא חוקי, אנא נסה שנית PIN`,
      updateSuccess: `ה-PIN שלך עודכן`,
      updateError: `ארעה שגיאה בעת עדכון ה-PIN שלך`,
    },
    mnemonic: {
      lengthViolation: `על הרמז להכיל 12 מילים לפחות.`,
      unableToValidate: `הרמז שהזנת אינו חוקי, אנא נסה שנית.`,
    },
    setNickname: {
      success: `הכינוי שלך נשמר.`,
      error: generalCommunicationError
    },
    setEmail: {
      success: `האימייל שלך נשמר.`,
      error: generalCommunicationError
    },
    lockTimeout: {
      top: `עליך להזין את ה-PIN שלך אחרי`,
      bottom: `דקות של חוסר פעילות`,
      update: `עדכון`,
      error: `לא הצלחנו לעדכן את הגדרות החשבון שלך`,
      success: `פסק זמן הנעילה עודכן`,
    },
    addFriend: {
      success: X => `@${X} -בקשת חברות נשלחה ל`,
      error: generalCommunicationError
    },
    removeFriend: {
      success: X => `@${X} :להסיר מחברים`,
      error: generalCommunicationError
    },
    loadInformation: {
      error: generalCommunicationError
    },
    cryptoBalance: {
      display: (N, B) => `Your ${N} balance is ${String(B).slice(0,8)}`,
      getError: `לא ניתן לאחזר את יתרת Eth`,
      manage: `ניהול ETH`,
    },
    sendEth: {
      error: {
        insufficient: `אין ברשותך מספיק ETH עבור עסקה זו`,
        generic: `ארעה שגיאה בזמן העסקה, אנא נסה שוב מאוחר יותר`,
        address: `אנא הזן כתובת חוקית`,
        amount: `אנא הזן סכום גדול מ-0`,
        limitExceeded: (A, M) => `בלבד, יש לבחור כמות קטנה יותר  ${CUR(A)} ${TL(A, M)} אתה יכול לשלוח בשבוע`,
      },
      amount: `כמות לשליחה`,
      address: `כתובת יעד`,
      transfer: `ETH להעביר`,
      transferAll: `להעביר הכל`,
      balance: Y => `${typeof Y === 'string' ? Y.slice(0,8) :''} הנוכחית שלך היא ETH- יתרת ה`,
      ethAddress: `כתובת Ethereum`,
      transferLowercase: `להעביר Eth`,
      note: (A, M) => `Lndr-בלבד מחוץ ל ${CUR(A)} ${TL(A, M)} שים לב: אתה יכול להעביר בשבוע`,
      warning: (Z, A, M) => `שלך ${CUR(A)} ${TL(A, M)} -מהמגבלת ה ${CUR(A)}${Z} נותרו לך`,
    },
    sendERC20: {
      error: {
        insufficient: (name) => `אין ברשותך מספיק ${name} עבור עסקה זו`,
        generic: `ארעה שגיאה בעת ההעברה, אנא נסה שוב מאוחר יותר`,
      },
      transfer: (name) => `להעביר ${name}`,
      address: `כתובת יעד`,
      balance: (name, balance) => ` ${typeof balance === 'string' ? balance.slice(0,8) :''} שלך היא ${name} -יתרת ה`,
      tokenAddress: (name) => `כתובת ${name}`,
      txCost: (ethCost, currencyCost) => `(${currencyCost}) ETH ${ethCost} :עלות העסקה`,
    },
    panelHeaders: [
      `כתובת ארנק`,
      `להסיר חשבון`,
      `היסטוריית עסקאות ETH`,
      `הפוך את PayPal`,
      `שינוי מטבע ראשי`,
      `נעילת תכונות נוספות`,
      `לדנות דוא"ל`,
      `לשנות PIN`,
      `לשנות פסק זמן נעילה`,
      `רמז`,
      `התראות`,
    ],
    viewEtherscan: `צפייה בהיסטורית Etherscan `,
    profilePic: {
      change: `לשנות תמונת פרופיל`,
      setError: `ארעה שגיאה בעת העלאת התמונה שלך, אנא נסה שוב מאוחר יותר`,
      getError: `ארעה שגיאה באחזור תמונת הפרופיל שלך`,
      setSuccess: `תמונת הפרופיל עודכנה`,
    },
    logoutSuccess: `התנתקת בהצלחה!`,
    logoutError: generalCommunicationError,
    addressWarning: `הזנה ידנית של כתובת יש להימנע. עושה זאת על אחריותך בלבד. אנחנו לא אחראים העברות misaddressed או אבדו.`,
  },

  currentBalance: name => `שלך היא ${name} -יתרת ה`,

  welcomeView: {
    by: `נוצר ע"י`,
    makeItEasy: `    עושה את תהליך המעקב אחר חובות פשוטים קל יותר Lndr`,
    weHelpFriends: `אנחנו עוזרים לחברים לחיות, לעבוד ולשחק ביחד.`,
    len: `Len`,
    dot: `.`,
    der: `der`,
    shareDinner: `לשתף ארוחת ערב`,
    fillTank: `למלא את המיכל שלך`,
    travelTogether: `לטייל ביחד`,
    runEthereum: `אנו פועלים על ETH!`,
    firstLendingApp: `אפליקציית ההלוואות הניידת הראשונה המאובטחת ע"י blockchain.`,
    greatConcert: `לראות קונצרט גדול`,
    youPlayWithFriends: `אתה משחק עם חברים; \n נשמור את הכרטיסייה ...`,
    start: `להתחיל`,
  },

  walkthrough: {
    skip: `לדלג`,
    continue: `לְהַמשִׁיך`,
    step1: {
      easyToUse: `Lndr היא הדרך הקלה ביותר לפצל את החשבונות, הוצאות נתח ולהתיישב חובות פשוט עם החברים והמשפחה, הכל נעשה בצורה מאובטחת על blockchain.`,
      len: `Len`,
      der: `der`,
    },
    step2: {
      getStarted: `כדי להתחיל לעבוד עם Lndr, תצטרך להוסיף חבר.`,
      friendsScreen: `בקר חברי מסך כדי לחפש, להוסיף, או להזמין חברים ובני המשפחה כדי להתחבר על Lndr.`,
    },
    step3: {
      title: `רישום פעולה`,
      easy: `פיצול הצעת חוק או הוספת חוב עם חבר קל ב Lndr!`,
      selectFriend: `בחר החבר שלך, המטבע שלך ואת הסכום.`,
      addMemo: `להוסיף כמה הערות בתיבת התזכיר וללחוץ על שלח.`,
    },
    step4: {
      title: `להחזיר חוב`,
      ready: `מוכן להתיישב?`,
      payPal: `כאשר הגיע הזמן להתיישב עם Lndr, \n- אתה יכול לבחור PayPal:`,
      ether: `- cryptocurrencies כמו Ether:`,
      cash: `- או פשוט להקליט להסדר במזומן:`,
      positiveBalance: `10.46`,
    },
    step5: {
      title: `Multi-מטבע`,
      multiCurrency: `Lndr יכול לעקוב אחר עסקאות שלך גם אם הם קורים במטבעות שונים.`,
      exchangeRate: `כאשר אתה מחליט לסגור חשבון עם החבר שלך, כל העסקות תומרנה למטבע העיקרי שלך באמצעות זמין עַדכָּנִי החילופי ביותר השיעורים.`,
      start: `התחל להשתמש Lndr!`,
    }
  },

  debtManagement: {
    shell: `עסקה חדשה`,
    add: `הוספת חוב`,
    selectFriend: `לבחור`,
    lend: `הלוואה חדשה`,
    borrow: `חוב חדש`,
    owesMe: `חייב לי`,
    iOwe: `אני חייב`,
    iLent: `חבר חייב לי`,
    iBorrowed: `אני חייד לחבר`,
    settleUpLower: `להחזיר חוב`,
    amountToSettle: `הסכום שיש להחזיר`,
    total: `סה"כ`,
    record: `רשומה`,
    records: `רמשומות`,
    chooseCurrency: `בחר מטבע`,

    createError: {
      amountTooLow: `הסכום חייב להיות גדול מ 0 $`,
      amountTooHigh: `הסכום חייב להיות פחות מ $ 1,000,000,000`,
      selfAsFriend: `אתה לא יכול ליצור חוב עם עצמך, בחר חבר אחר`,
      pending: `אנא פתור את העסקה הממתינה שלך עם משתמש זה לפני יצירת אחת חדשה`,
      insufficientEth: E => `עבור להגדרות כדי לצפות ביתרתך ,ETH ${E} חייבים להיות ברשותך לפחות`,
    },
    fields: {
      currency: `מַטְבֵּעַ`,
      amount: `סכום`,
      settlementAmount: `סכום פשרה`,
      selectFriend: `חבר`,
      memo: `תזכיר`,
      direction: `בחר את ההצהרה הנכונה`,
    },
    memo: {
      example: `הקלד תזכיר כאן`,
    },
    direction: {
      lend: X => `חייב לי ${X} `,
      borrow: X => `${X} -אני חייב ל`,
      initiatedLend: X => `אומר/ת שהוא/היא חייב/ת ${X}`,
      initiatedBorrow: X => `אומר שאתה חייב ${X}`,
      pendingLend: X => `חייב לך @${X}`,
      pendingBorrow: X => `@${X} אתה חייב`,
      settlement: settlement => `${settlement.settlementCurrency} Settlement`,
      pendingLendSettlement: S => `${S.settlementCurrency} -מבקש החזרת חוב ב @${S.debtorNickname}`,
      pendingBorrowSettlement: S => `${S.settlementCurrency} -רצה להחזיר לך חוב ב @${S.debtorNickname}`,
      pendingLendSettlementMe: S => `${S.settlementCurrency} -ב @${S.debtorNickname} -בקשת להחזיר חוב ל`,
      pendingBorrowSettlementMe: S => `${S.settlementCurrency} -יחזיר חוב ב @${S.debtorNickname} -בקשת ש`,
    },
    pending: {
      success: F => `@${F.nickname} -חוב ממתין נשלח ל`,
      error: generalCommunicationError
    },
    pendingParens: `(ממתין)`,
    confirmation: {
      transaction: CP => `אושרה בהצלחה ${CP} העסקה עם`,
      settlement: CP => `אושר בהצלחה ${CP} החזר חוב עם`,
      error: `לא ניתן לאשר את העסקה בשלב זה, אנא נסה שוב מאוחר יותר`,
    },
    rejection: {
      success: `העסקה נדחתה`,
      error: `לא ניתן לדחות את העסקה בשלב זה, אנא נסה שוב מאוחר יותר`,
    },
    balances: {
      error: `לא ניתן לטעון יתרות בשלב זה, אנא נסה שוב מאוחר יותר`,
    },
    for: M => `${M} עבור`,
    settleUp: `להחזיר חוב`,
    settleTotal: `להסדיר סכום כולל`,
    settleUpMemo: (D, A) => `${D === 'lend' ? 'החזרת חוב עבור' : 'בקשת החזרת חוב עבור'} ${A}`,
    recordSettleUpMemo: `החזרת חוב`,
    balanceByCurrency: `פרטים`,
  },
  settlementManagement: {
    bilateral: {
      error: {
        insufficient: X => `נכשל עקב תקציב לא מספיק${X} ההסדר שלך עם`,
        generic: X => `${X} ארעה שגיאה בעת עיבוד ההסדר שלך עם`,
      }
    },
    eth: `החזרה בעזרת ETH`,
    erc20: name => `Settle with ${name}`,
    paypal: `החזרה בעזרת PayPal`,
    nonPayment: `לרשום הסדר`,
    select: `סוג היישוב בחר`,
  },

  accountViewLanguage: {
    lndr: `L n d r`,
    home: `דף הבית`,
    friends: `חברים`,
    activity: `פעילות`,
  },

  notifications: {
    toggleNotifications: `החלפת מצב התראות`,
    enable: `להדליק`,
    disable: `לכבות`,
  },

  pendingTransactionsLanguage: {
    shell: `עסקה ממתינה`,
    title: `בהמתנה`,
    memo: `תזכיר`,
    for: `עבור`,
    none: `אין לך עסקאות ממתינות`,
    confirmationQuestion: `האם אתה בטוח שברצונך לאשר עסקה זו?`,
    pendingAnnouncement: `עסקה זו מחכה לאישור על ידי הצד השני.`,
    bilateral: `ממתין עד שהעברת  תסתיים`,
    confirm: `לאשר`,
    reject: `לדחות עסקה`,
    rejectRequest: `לדחות`,
    cancel: `לבטל עסקה`,
    direction: {
      lend: (X, Z) => `${Z} חייב לך @${X}`,
      borrow: (X, Z) => `@${X} -ל ${Z} אתה חייב`,
    }
  },

  pendingSettlementsLanguage: {
    shell: `הסדר ממתין`,
    title: `בהמתנה`,
    none: `אין לך הסדרים ממתינים`,
    confirm: `לאשר`,
    reject: `לדחות הסדר`,
    cancel: `לבטל הסדר`,
  },

  recentTransactionsLanguage: {
    title: `הושלם`,
    none: `אין לך עסקאות שהושלמו`,
    direction: {
      lend: (X, Z) => `${Z} חייב לך@${X}`,
      borrow: (X, Z) => `@${X} -ל ${Z} אתה חייב`
    },
    balance: `יתרה`,
    consolidatedBalance: `יתרה`,
    friends: FS => `(${FS === 1 ? 'חבר': 'חברים'} ${FS} -מ)`,
  },

  tabs: {
    home: `דף הבית `,
    friends: `חברים`,
    activity: `פעילות`,
  },

  confirmation: {
    shell: `אשור`,
    done: `בוצע`,
    create: {
      start: `שלחנו את הרשומה `,
      end: ` לאשור`,
    },
    confirm: {
      start: `אישרת רשומה זו מ `,
      end: `.`,
    },
    reject: {
      start: `הודענו ל   `,
      end: `. שדחית רשומה זו`,
    },
    confirmFriend: {
      start: `אתה ו   `,
      end: `! חברים עכשיו`,
    },
    rejectFriend: {
      start: `דחית את בקשת החברות מ   `,
      end: `.`,
    },
    rejectOutboundFriendRequest: {
      start: `ביטלת את בקשת חברות ל `,
      end: `.`,
    },
    ethSent: {
      start: `שלחת ETH `,
      end: ` בהצלחה ומספר העסקה שלך הוא`,
    },
    erc20Sent: {
      start: `שלחת  `,
      end: `בהצלחה ומספר העסקה שלך הוא `,
    },
    requestPayPalPayee: {
      start: ` שאתה רוצה להתיישב עם PayPal`,
      end: `אנחנו ספרנו `,
    },
    requestPayPalPayment: {
      start: ` יודע שאתה רוצה להיות משולם עם PayPal`,
      end: `הודעתי ל- `,
    },
    settledWithPayPal: {
      start: ` כי אתה כבר התיישבת עם PayPal`,
      end: `אנחנו ספרנו `,
    },
    kycSuccess: {
      start: `תודה! החשבון שלך נבדק.

      `,
      end: `תקבל הודעה כאשר התכונות הנוספות שלך אינן נעולות.`
    },
    status: `אתה יכול לראות את סטטוס העסקה הזאת `,
    activity: `.בלשונית הפעילות`,
  },

  pendingFriendRequestsLanguage: {
    shell: `בקשת חברות`,
    message: `בקשות חברות`,
    request: F => `!רוצה להיות חבר שלך @${F}`,
    outbound: F => `שלח בקשת חברות ל @${F}`,
  },

  privacyPolicy: {
    link: `blockmason.io/lndr/terms/`,
    message: `על ידי לחיצה בהמשך שתאשר כי קראת מסכים למדיניות הפרטיות של Blockmason. Blockmason עשויים להשתמש בכתובת הדוא"ל שלך כדי לשלוח עדכונים על Blockmason ו LNDR. הנה קישור למדיניות הפרטיות`,
  },

  payPalLanguage: {
    connectPayPal: `חבר PayPal`,
    connectSuccess: `PayPal הופעלו בהצלחה.`,
    disconnectPayPal: `נתק PayPal`,
    disconnected: `PayPal מנותק.`,
    requestPayPalPayment: `תשלום בקשת PayPal`,
    sendWithPayPal: `שלח עם PayPal`,
    enablePayPal: `הפוך את PayPal`,
    requestPayPalPayee: `בקש PayPal`,
    enablePayPalForFriend: F => `הפעלת PayPal מאפשרת ל- @${F} לשלם לך.`,
    friendNotEnabled: F => `@${F} לא אפשר תשלומים PayPal.`,
    friendRequestedConnect: F => `@${F} רוצה לשלם לך באמצעות PayPal`,
    requestFriendConnect: F => `ביקשת מ- @${F} להפעיל את PayPal`,
    feesNotification: `לא כולל דמי PayPal`,
    feesInformationHeader: `מידע דמי PayPal`,
    feesInformation: `1. חשבון PayPal שלך חייב להיות קשור לחשבון בנק.
    
2. משלמים במטבע שונה מהמטבע של הבנק שלך, עליך לשלם עמלה 0.35 $.

3. דמי העברה בינלאומיים:
    ארה""ב לקנדה / אירופה: 2.99 $
    ארה""ב לכל מקום אחר: 4.99 $

4. עמלות אלה אינן מקיפות. לקבלת המידע העדכני ביותר אנא בקרו באתר:

    https://www.paypal.com/us/webapps/mpp/paypal-fees#sending-us`,
    payPalSite: `PayPal.com`,
  },

  countries: [
    { name: `אפגניסטן`, code: 'AFG' },
    { name: `אלבניה`, code: 'ALB' },
    { name: `אלג'יריה`, code: 'DZA' },
    { name: `אנדורה`, code: 'AND' },
    { name: `אנגולה`, code: 'AGO' },
    { name: `אנגווילה`, code: 'AIA' },
    { name: `אנטארקטיקה`, code: 'ATA' },
    { name: `אנטיגואה וברבודה`, code: 'ATG' },
    { name: `ארגנטינה`, code: 'ARG' },
    { name: `אַרְמֶנִיָה`, code: 'ARM' },
    { name: `ארובה`, code: 'ABW' },
    { name: `אוֹסטְרַלִיָה`, code: 'AUS' },
    { name: `אוֹסְטְרֵיָה`, code: 'AUT' },
    { name: `אזרבייג'ן`, code: 'AZE' },
    { name: `איי בהאמה`, code: 'BHS' },
    { name: `בחריין`, code: 'BHR' },
    { name: `בנגלדש`, code: 'BGD' },
    { name: `ברבדוס`, code: 'BRB' },
    { name: `בלארוס`, code: 'BLR' },
    { name: `בלגיה`, code: 'BEL' },
    { name: `בליז`, code: 'BLZ' },
    { name: `בנין`, code: 'BEN' },
    { name: `ברמודה`, code: 'BMU' },
    { name: `בהוטן`, code: 'BTN' },
    { name: `בוליביה`, code: 'BOL' },
    { name: `בוסניה והרצגובינה`, code: 'BIH' },
    { name: `בוצוואנה`, code: 'BWA' },
    { name: `בְּרָזִיל`, code: 'BRA' },
    { name: `ברוניי`, code: 'BRN' },
    { name: `בולגריה`, code: 'BGR' },
    { name: `בורקינה פאסו`, code: 'BFA' },
    { name: `בורונדי`, code: 'BDI' },
    { name: `Cabo Verde`, code: 'CPV' },
    { name: `קמבודיה`, code: 'KHM' },
    { name: `קמרון`, code: 'CMR' },
    { name: `קנדה`, code: 'CAN' },
    { name: `איי קיימן`, code: 'CYM' },
    { name: `הרפובליקה המרכז - אפריקאית`, code: 'CAF' },
    { name: `צ'אד`, code: 'TCD' },
    { name: `צ'ילה`, code: 'CHL' },
    { name: `סין`, code: 'CHN' },
    { name: `קולומביה`, code: 'COL' },
    { name: `קומורו`, code: 'COM' },
    { name: `קונגו`, code: 'COG' },
    { name: `קונגו`, code: 'COD' },
    { name: `איי קוק`, code: 'COK' },
    { name: `קוסטה ריקה`, code: 'CRI' },
    { name: `חוף השנהב`, code: 'CIV' },
    { name: `קרואטיה`, code: 'HRV' },
    { name: `קובה`, code: 'CUB' },
    { name: `קוראסאו`, code: 'CUW' },
    { name: `קַפרִיסִין`, code: 'CYP' },
    { name: `צ'כיה`, code: 'CZE' },
    { name: `דנמרק`, code: 'DNK' },
    { name: `ג'יבוטי`, code: 'DJI' },
    { name: `דומיניקה`, code: 'DMA' },
    { name: `הרפובליקה הדומיניקנית`, code: 'DOM' },
    { name: `אקוודור`, code: 'ECU' },
    { name: `מִצְרַיִם`, code: 'EGY' },
    { name: `אל סלבדור`, code: 'SLV' },
    { name: `גיניאה המשוונית`, code: 'GNQ' },
    { name: `אריתריאה`, code: 'ERI' },
    { name: `אסטוניה`, code: 'EST' },
    { name: `Eswatini`, code: 'SWZ' },
    { name: `אֶתִיוֹפִּיָה`, code: 'ETH' },
    { name: `פיג'י`, code: 'FJI' },
    { name: `פינלנד`, code: 'FIN' },
    { name: `צָרְפַת`, code: 'FRA' },
    { name: `גיאנה הצרפתית`, code: 'GUF' },
    { name: `פולינזיה הצרפתית`, code: 'PYF' },
    { name: `גבון`, code: 'GAB' },
    { name: `גמביה`, code: 'GMB' },
    { name: `גיאורגיה`, code: 'GEO' },
    { name: `גֶרמָנִיָה`, code: 'DEU' },
    { name: `גאנה`, code: 'GHA' },
    { name: `גיברלטר`, code: 'GIB' },
    { name: `יָוָן`, code: 'GRC' },
    { name: `גרינלנד`, code: 'GRL' },
    { name: `גרנדה`, code: 'GRD' },
    { name: `גוואדלופ`, code: 'GLP' },
    { name: `גואם`, code: 'GUM' },
    { name: `גואטמלה`, code: 'GTM' },
    { name: `גיניאה`, code: 'GIN' },
    { name: `גינאה ביסאו`, code: 'GNB' },
    { name: `גיאנה`, code: 'GUY' },
    { name: `איטי`, code: 'HTI' },
    { name: `הוותיקן`, code: 'VAT' },
    { name: `הונדורס`, code: 'HND' },
    { name: `הונג קונג`, code: 'HKG' },
    { name: `הונגריה`, code: 'HUN' },
    { name: `אִיסלַנד`, code: 'ISL' },
    { name: `הוֹדוּ`, code: 'IND' },
    { name: `אִינדוֹנֵזִיָה`, code: 'IDN' },
    { name: `אִירָן`, code: 'IRN' },
    { name: `עִירַאק`, code: 'IRQ' },
    { name: `אירלנד`, code: 'IRL' },
    { name: `האי מאן`, code: 'IMN' },
    { name: `ישראל`, code: 'ISR' },
    { name: `אִיטַלִיָה`, code: 'ITA' },
    { name: `בג'מייקה`, code: 'JAM' },
    { name: `יפן`, code: 'JPN' },
    { name: `יַרדֵן`, code: 'JOR' },
    { name: `קזחסטן`, code: 'KAZ' },
    { name: `קנייה`, code: 'KEN' },
    { name: `קיריבטי`, code: 'KIR' },
    { name: `קוריאה (צפון קוריאה)`, code: 'PRK' },
    { name: `קוריאה (ROK)`, code: 'KOR' },
    { name: `כווית`, code: 'KWT' },
    { name: `קירגיזסטן`, code: 'KGZ' },
    { name: `לאוס`, code: 'LAO' },
    { name: `לטביה`, code: 'LVA' },
    { name: `לבנון`, code: 'LBN' },
    { name: `לסוטו`, code: 'LSO' },
    { name: `ליבריה`, code: 'LBR' },
    { name: `לוב`, code: 'LBY' },
    { name: `ליכטנשטיין`, code: 'LIE' },
    { name: `ליטא`, code: 'LTU' },
    { name: `לוקסמבורג`, code: 'LUX' },
    { name: `מקאו`, code: 'MAC' },
    { name: `מוּקדוֹן`, code: 'MKD' },
    { name: `מדגסקר`, code: 'MDG' },
    { name: `מלאווי`, code: 'MWI' },
    { name: `מלזיה`, code: 'MYS' },
    { name: `האיים המלדיביים`, code: 'MDV' },
    { name: `מאלי`, code: 'MLI' },
    { name: `מלטה`, code: 'MLT' },
    { name: `איי מרשל`, code: 'MHL' },
    { name: `מרטיניק`, code: 'MTQ' },
    { name: `מאוריטניה`, code: 'MRT' },
    { name: `מאוריציוס`, code: 'MUS' },
    { name: `מקסיקו`, code: 'MEX' },
    { name: `מיקרונזיה`, code: 'FSM' },
    { name: `מולדובה`, code: 'MDA' },
    { name: `מונקו`, code: 'MCO' },
    { name: `מונגוליה`, code: 'MNG' },
    { name: `מונטנגרו`, code: 'MNE' },
    { name: `מונטסראט`, code: 'MSR' },
    { name: `מָרוֹקוֹ`, code: 'MAR' },
    { name: `מוזמביק`, code: 'MOZ' },
    { name: `מיאנמר`, code: 'MMR' },
    { name: `נמיביה`, code: 'NAM' },
    { name: `נאורו`, code: 'NRU' },
    { name: `נפאל`, code: 'NPL' },
    { name: `הולנד`, code: 'NLD' },
    { name: `קלדוניה החדשה`, code: 'NCL' },
    { name: `ניו זילנד`, code: 'NZL' },
    { name: `ניקרגואה`, code: 'NIC' },
    { name: `ניז'ר`, code: 'NER' },
    { name: `ניגריה`, code: 'NGA' },
    { name: `ניואה`, code: 'NIU' },
    { name: `איי מריאנה הצפוניים`, code: 'MNP' },
    { name: `נורווגיה`, code: 'NOR' },
    { name: `עומאן`, code: 'OMN' },
    { name: `פקיסטן`, code: 'PAK' },
    { name: `פאלאו`, code: 'PLW' },
    { name: `פלשתינה`, code: 'PSE' },
    { name: `פנמה`, code: 'PAN' },
    { name: `פפואה גינאה החדשה`, code: 'PNG' },
    { name: `פרגוואי`, code: 'PRY' },
    { name: `פרו`, code: 'PER' },
    { name: `פיליפיני`, code: 'PHL' },
    { name: `פיטקרן`, code: 'PCN' },
    { name: `פּוֹלִין`, code: 'POL' },
    { name: `פּוֹרטוּגָל`, code: 'PRT' },
    { name: `פוארטו ריקו`, code: 'PRI' },
    { name: `קטאר`, code: 'QAT' },
    { name: `איחוד`, code: 'REU' },
    { name: `רומני`, code: 'ROU' },
    { name: `הפדרציה הרוסית`, code: 'RUS' },
    { name: `רואנדה`, code: 'RWA' },
    { name: `סנט ברתולומיאו`, code: 'BLM' },
    { name: `סנט הלנה, אסנשן וטריסטן דה קונה`, code: 'SHN' },
    { name: `סנט קיטס ונוויס`, code: 'KNA' },
    { name: `סנט לוסיה`, code: 'LCA' },
    { name: `מרטין הקדוש`, code: 'MAF' },
    { name: `סנט פייר ומיקלון`, code: 'SPM' },
    { name: `וינסנט הקדוש ו ה - גרנידיים`, code: 'VCT' },
    { name: `סמואה`, code: 'WSM' },
    { name: `סן מרינו`, code: 'SMR' },
    { name: `סאו טומה ופרינסיפה`, code: 'STP' },
    { name: `ערב הסעודית`, code: 'SAU' },
    { name: `סנגל`, code: 'SEN' },
    { name: `סרביה`, code: 'SRB' },
    { name: `איי סיישל`, code: 'SYC' },
    { name: `סיירה לאונה`, code: 'SLE' },
    { name: `סינגפור`, code: 'SGP' },
    { name: `סן מרטן`, code: 'SXM' },
    { name: `סלובקיה`, code: 'SVK' },
    { name: `סלובניה`, code: 'SVN' },
    { name: `איי שלמה`, code: 'SLB' },
    { name: `סומליה`, code: 'SOM' },
    { name: `דרום אפריקה`, code: 'ZAF' },
    { name: `דרום סודן`, code: 'SSD' },
    { name: `סְפָרַד`, code: 'ESP' },
    { name: `סרי לנקה`, code: 'LKA' },
    { name: `סודן`, code: 'SDN' },
    { name: `סורינאם`, code: 'SUR' },
    { name: `שוודיה`, code: 'SWE' },
    { name: `שווייץ`, code: 'CHE' },
    { name: `הרפובליקה הערבית של סוריה`, code: 'SYR' },
    { name: `טייוואן`, code: 'TWN' },
    { name: `טג'יקיסטן`, code: 'TJK' },
    { name: `טנזניה`, code: 'TZA' },
    { name: `תאילנד`, code: 'THA' },
    { name: `טימור`, code: 'TLS' },
    { name: `ללכת`, code: 'TGO' },
    { name: `טוקלאו`, code: 'TKL' },
    { name: `טונגה`, code: 'TON' },
    { name: `טרינידד וטובגו`, code: 'TTO' },
    { name: `תוניסיה`, code: 'TUN' },
    { name: `טורקיה`, code: 'TUR' },
    { name: `טורקמניסטן`, code: 'TKM' },
    { name: `איי טורקס וקאיקוס`, code: 'TCA' },
    { name: `טובאלו`, code: 'TUV' },
    { name: `אוגנדה`, code: 'UGA' },
    { name: `אוקראינה`, code: 'UKR' },
    { name: `איחוד האמירויות הערביות`, code: 'ARE' },
    { name: `הממלכה המאוחדת`, code: 'GBR' },
    { name: `ארצות הברית`, code: 'USA' },
    { name: `ארצות הברית האיים המרוחקים הקטנים`, code: 'UMI' },
    { name: `אורוגוואי`, code: 'URY' },
    { name: `אוזבקיסטן`, code: 'UZB' },
    { name: `ונואטו`, code: 'VUT' },
    { name: `ונצואלה`, code: 'VEN' },
    { name: `ויאטנם`, code: 'VNM' },
    { name: `איי בתולה בריטיים`, code: 'VGB' },
    { name: `איי הבתולה של ארה"ב`, code: 'VIR' },
    { name: `סהרה המערבית`, code: 'ESH' },
    { name: `תֵימָן`, code: 'YEM' },
    { name: `זמביה`, code: 'ZMB' },
    { name: `זימבבואה`, code: 'ZWE' },
  ]
}
