export const quizzes = {
  US: {
    language: "en",
    questions: [
      {
        q: "What is your stance on abortion?",
        options: [
          "Completely legal with no restrictions",
          "Legal but with some restrictions",
          "Illegal except in extreme cases",
          "Completely illegal"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Do you support gay marriage?",
        options: [
          "Strongly support",
          "Somewhat support",
          "Somewhat oppose",
          "Strongly oppose"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "How should the government address white supremacy groups?",
        options: [
          "Strictly outlaw and punish",
          "Monitor closely, intervene if violent",
          "Allow but no support",
          "Ignore or tolerate"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Military spending should be:",
        options: [
          "Significantly decreased",
          "Maintain current levels",
          "Increased moderately",
          "Significantly increased"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "How should taxes be structured?",
        options: [
          "Highly progressive (rich pay way more)",
          "Moderately progressive",
          "Flat tax for everyone",
          "Low taxes, especially for rich"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "What about public healthcare funding?",
        options: [
          "Fully public, universal healthcare",
          "Public-private mix",
          "Limited public support",
          "Healthcare is private, no public funding"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Should environmental regulations be stronger?",
        options: [
          "Yes, urgent and strict",
          "Yes, but balanced with economy",
          "No, minimal regulations",
          "No regulations; prioritize business"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "Immigration policy should be:",
        options: [
          "Open and welcoming",
          "Controlled but fair",
          "Strict with few exceptions",
          "Very restrictive"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "Government role in education:",
        options: [
          "Fully public and free education",
          "Public education with some private options",
          "Mostly private schools",
          "Education entirely private"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Social welfare programs:",
        options: [
          "Expand and strengthen",
          "Maintain current levels",
          "Reduce and limit",
          "Eliminate"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "Freedom of speech limits:",
        options: [
          "Allow hate speech only if violent",
          "Limit hate speech but protect free speech",
          "Minimal limits on speech",
          "No limits, absolute freedom"
        ],
        values: [-10, -5, 5, 20],
      },
      {
        q: "Police reform should be:",
        options: [
          "Major reforms or defund",
          "Some reforms",
          "Maintain current system",
          "Increase police funding"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Gun control laws:",
        options: [
          "Strict gun control",
          "Moderate control",
          "Loose control",
          "No gun control"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Role of government in economy:",
        options: [
          "Large government role regulating economy",
          "Moderate regulation",
          "Minimal government intervention",
          "Free market with no government role"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "Capital punishment:",
        options: [
          "Abolish it completely",
          "Rarely use it",
          "Use for serious crimes",
          "Use widely"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "LGBTQ+ rights:",
        options: [
          "Full equal rights and protections",
          "Some protections",
          "Limited rights",
          "No special protections"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Should religion influence laws?",
        options: [
          "No influence at all",
          "Limited influence",
          "Moderate influence",
          "Strong influence"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "How should drug laws be?",
        options: [
          "Legalize most drugs",
          "Decriminalize",
          "Strict laws with some leniency",
          "Strict laws with harsh penalties"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Role of unions:",
        options: [
          "Strong support and protection",
          "Support but moderate",
          "Limited role",
          "Oppose unions"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "Foreign policy approach:",
        options: [
          "Diplomacy first, minimal military",
          "Balanced diplomacy and military",
          "Military first",
          "Aggressive military action"
        ],
        values: [-20, -5, 5, 20],
      },
    ],
  },

  IL: {
    language: "he",
    questions: [
      {
        q: "מה עמדתך בנוגע להפלה?",
        options: [
          "הפלה חוקית לחלוטין וללא הגבלות",
          "הפלה חוקית עם הגבלות מסוימות",
          "הפלה מותרת רק במקרים קיצוניים",
          "הפלה אסורה לחלוטין"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "האם אתה תומך בנישואים חד-מיניים?",
        options: [
          "תומך בהחלט",
          "תומך במידה מסוימת",
          "מתנגד במידה מסוימת",
          "מתנגד בהחלט"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "כיצד יש לטפל בקבוצות עליונות לבנות?",
        options: [
          "לאסור בחומרה ולהעניש",
          "לפקח מקרוב ולהתערב אם יש אלימות",
          "לאפשר אך ללא תמיכה",
          "להתעלם או לסבול"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "מימון צבאי צריך להיות:",
        options: [
          "מורד משמעותית",
          "להשאיר כפי שהוא כיום",
          "להגדיל במידה מתונה",
          "להגדיל משמעותית"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "כיצד יש למסות את האזרחים?",
        options: [
          "מסים פרוגרסיביים גבוהים (עשירים משלמים הרבה יותר)",
          "מסים פרוגרסיביים מתונים",
          "מס שווה לכולם",
          "מסים נמוכים, בעיקר לעשירים"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "מה לגבי מימון שירותי בריאות ציבוריים?",
        options: [
          "בריאות ציבורית מלאה וכוללת",
          "שילוב ציבורי-פרטי",
          "מימון ציבורי מוגבל",
          "בריאות פרטית בלבד, ללא מימון ציבורי"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "האם יש להחמיר את רגולציות הסביבה?",
        options: [
          "כן, בחומרה ובמהירות",
          "כן, אך לאזן עם הכלכלה",
          "לא, רגולציה מינימלית",
          "ללא רגולציה; לעדיף עסקים"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "מדיניות ההגירה צריכה להיות:",
        options: [
          "פתוחה ומקבלת",
          "מבוקרת אך הוגנת",
          "מחמירה עם מעט חריגים",
          "מחמירה מאוד"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "תפקיד הממשלה בחינוך:",
        options: [
          "חינוך ציבורי חינם ומלא",
          "חינוך ציבורי עם אפשרויות פרטיות",
          "רוב בתי ספר פרטיים",
          "חינוך פרטי בלבד"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "תוכניות רווחה חברתית:",
        options: [
          "להרחיב ולחזק",
          "לשמור על הרמות הקיימות",
          "לצמצם ולהגביל",
          "לבטל"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "מגבלות חופש הביטוי:",
        options: [
          "לא לאפשר דיבור שכרוך בשנאה רק אם אלים",
          "להגביל דיבור שכרוך בשנאה אבל להגן על חופש הביטוי",
          "מגבלות מינימליות",
          "חופש ביטוי מוחלט ללא מגבלות"
        ],
        values: [-10, -5, 5, 20],
      },
      {
        q: "רפורמה במשטרה צריכה להיות:",
        options: [
          "רפורמות גדולות או הפחתת תקציב",
          "רפורמות מסוימות",
          "לשמור על המערכת הנוכחית",
          "להגדיל את המימון"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "חוקי נשק:",
        options: [
          "חוקי נשק מחמירים",
          "חוקי נשק מתונים",
          "חוקי נשק רופפים",
          "ללא חוקי נשק"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "תפקיד הממשלה בכלכלה:",
        options: [
          "תפקיד גדול ברגולציה",
          "רגולציה מתונה",
          "התערבות ממשלתית מינימלית",
          "שוק חופשי ללא התערבות"
        ],
        values: [-20, -5, 5, 20],
      },
      {
        q: "עונש מוות:",
        options: [
          "לבטל לחלוטין",
          "להשתמש רק במקרים נדירים",
          "להשתמש בעבירות חמורות",
          "להשתמש באופן נרחב"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "זכויות LGBTQ+:",
        options: [
          "זכויות והגנות מלאות",
          "כמה הגנות",
          "הגבלות זכויות",
          "ללא הגנות מיוחדות"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "האם לדת יש להשפיע על חוקים?",
        options: [
          "ללא השפעה בכלל",
          "השפעה מוגבלת",
          "השפעה בינונית",
          "השפעה חזקה"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "חוקי סמים:",
        options: [
          "ללגאל את רוב הסמים",
          "להפחית עונשים",
          "חוקי סמים מחמירים עם גמישות מסוימת",
          "חוקי סמים מחמירים עם עונשים קשים"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "תפקיד איגודים מקצועיים:",
        options: [
          "תמיכה חזקה והגנה",
          "תמיכה מתונה",
          "תפקיד מוגבל",
          "התנגדות לאיגודים"
        ],
        values: [-20, -10, 10, 20],
      },
      {
        q: "מדיניות חוץ:",
        options: [
          "דיפלומטיה תחילה, צבא מינימלי",
          "איזון בין דיפלומטיה לצבא",
          "צבא תחילה",
          "פעולה צבאית אגרסיבית"
        ],
        values: [-20, -5, 5, 20],
      },
    ],
  },
};
