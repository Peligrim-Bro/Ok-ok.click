/* PattayaOK — контакты, донат и бегущие строки
   recs = верхняя полоса «рекомендую»
   ads  = нижняя полоса «реклама»
   Чтобы добавить ссылку — допиши объект { href, ru, en, th } */
window.PATTAYAOK = {
  site: "https://pattayaok.netlify.app/",
  /* Сюда вставить referral EX24. Пока пусто — кнопка «Получить курс» ведёт на карту офиса */
  ex24Ref: "",

  telegramChannel: "https://t.me/PattayaOk_Ok",
  telegramGroup: "https://t.me/PattayaOk_Ok",
  telegramBotToken: "8643363606:AAH1t0fNvDUQqafRF8eNch72lAaWQ-1Yrt8",
  telegramChatId: "@PattayaOk_Ok",
  whatsappNumber: "66808243185",
  whatsappCommunity: "",
  usdtTrc20: "TPi5ifGJjobW7zshfmheLJjj4WxZEYFVL9",
  btc: "",
  ton: "UQDS62ZginknxqFEET0F10s7WGIPpgGmVdc3YwdFQduRl1vE",
  recs: [
    { href: "https://nomads.com/", ru: "Nomads.com · жильё и комьюнити для номадов", en: "Nomads.com · housing and nomad community", th: "Nomads.com" }
  ],
  /* Заметки от автора — показываются в кнопке $ 
     допиши { when, ru, en, th } сверху списка */
  notes: [
    { when: "5 сен 2026", ru: "Пишу сюда сам: курс, проверки, что изменилось в городе. Это не реклама.", en: "Author notes: rates, checks, what changed in town. Not an ad.", th: "บันทึกจากผู้เขียน" }
  ],
  news: [
    {
      when: "15–18 сен",
      href: "https://www.tatnews.org/2026/09/thailand-introduces-new-30-day-and-15-day-visa-exemption-rules-from-15-september/",
      ru: "С 15 сентября безвиз уже не 60 дней. Для большинства паспортов — 30, список стран урезан. Кто въехал 14-го и раньше, сидит по старым правилам. Продление в иммиграции Джомтьена по-прежнему 1 900 бат.",
      en: "From 15 September the old 60-day visa exemption is gone. Most passports now get 30 days and a shorter country list. Arrivals on 14 September or earlier keep the old stamp. A 1,900-baht extension is still available at Jomtien immigration.",
      th: "ตั้งแต่วันที่ 15 ก.ย. ยกเว้นวีซ่า 60 วันหมดแล้ว ส่วนใหญ่ได้ 30 วัน"
    },
    {
      when: "17–20 сен",
      href: "https://www.pattayamail.com/news/pattaya-and-bangkok-brace-for-heavy-rain-and-traffic-chaos-565205",
      ru: "Метеослужба держит Чонбури в списке сильных дождей до 20 сентября. Низменности и тоннели могут заливать, волны на заливе — выше обычного. Ко Лан в грозу лучше не планировать.",
      en: "TMD has Chonburi on the heavy-rain list through 20 September. Low streets and underpasses can flood; the Gulf gets messy. Skip Koh Larn if storms sit over the bay.",
      th: "กรมอุตุฯ เตือนฝนหนักชลบุรีถึง 20 ก.ย. ระวังน้ำท่วมและคลื่น"
    },
    {
      when: "17 сен",
      href: "https://www.bangkokpost.com/thailand/general/3321180/2200-firms-suspected-of-nominee-land-holding",
      ru: "МВД проверяет больше 11 тысяч фирм на номиналов: 2 200 уже с иностранным контролем, земля в деле — около 85 млрд бат. Срок сверки — до конца сентября. В Паттайе такие схемы тоже в списке.",
      en: "Interior is checking 11,000-plus companies for nominee land holdings. About 2,200 already look foreign-controlled; land in the net is near 85 billion baht. Deadline: end of September. Pattaya is on the map.",
      th: "ตรวจบริษัทนอมินีกว่า 11,000 แห่ง ที่ดินราว 85,000 ล้านบาท"
    },
    {
      when: "18 сен",
      href: "https://www.pattayamail.com/news/pattaya-approves-thb-9-66-million-for-141-new-cctv-cameras-565343",
      ru: "Горсовет Паттайи утвердил 9,66 млн бат на 141 новую камеру на перекрёстках. Спорят, покупать железо или арендовать: свои камеры часто мёртвые, аренда живее за счёт ремонта.",
      en: "Pattaya council approved 9.66 million baht for 141 extra junction cameras. The fight is buy vs rent: city-owned units often sit dead, rented ones get fixed.",
      th: "พัทยาอนุมัติ 9.66 ล้าน ติดกล้อง 141 จุด"
    },
    {
      when: "17 сен",
      href: "https://thepattayanews.com/2026/09/17/over-a-dozen-japanese-taiwanese-thai-and-chinese-nationals-arrested-in-raid-on-luxury-mansion-in-bangkok-for-running-transnational-call-center-scam-targeting-japanese-people/",
      ru: "В Бангкоке сняли особняк с 15 людьми: звонили в Японию под видом полиции. Восемь звукоизолированных кабин, липовая форма, сценарии развода. Босса-китайца ищут. Классический call-center, только в элитном доме.",
      en: "Immigration hit a Bangkok mansion and took 15 people running Japan-facing call-center fraud: fake police kits, scripts, eight sound booths. The Chinese organizer is still being sought.",
      th: "บุกคฤหาสน์กรุงเทพ จับ 15 คน คอลเซ็นเตอร์หลอกคนญี่ปุ่น"
    }
  ],
  trusts: [
    { href: "https://maps.google.com/?q=Pattaya", ru: "Карта Паттайи", en: "Pattaya map", th: "แผนที่พัทยา" },
    { href: "https://www.immigration.go.th", ru: "Иммиграция TH", en: "Thai Immigration", th: "ตรวจคนเข้าเมือง" },
    { href: "tel:1155", ru: "Tourist Police 1155", en: "Tourist Police 1155", th: "Tourist Police 1155" },
    { href: "tel:1669", ru: "Скорая 1669", en: "Ambulance 1669", th: "ฉุกเฉิน 1669" },
    { href: "https://www.bangkokpattayahospital.com/", ru: "Bangkok Hospital", en: "Bangkok Hospital", th: "Bangkok Hospital" },
    { href: "https://www.bot.or.th/en/statistics/exchange-rate.html", ru: "Курс BOT", en: "BOT rates", th: "BOT" }
  ],
  ads: [
    { href: "https://t.me/PattayaOk_Ok", ru: "Telegram @PattayaOk_Ok · новости и скам недели", en: "Telegram @PattayaOk_Ok · news and scam of the week" },
    { href: "https://www.google.com/maps/search/?api=1&query=Ex24.pro+Thappraya+Pattaya", ru: "EX24.pro Thappraya · лицензия, рубли и доллары", en: "EX24.pro Thappraya · licensed RUB and USD" },
    { href: "https://maps.app.goo.gl/avmLVvqgaYhCYtGP7?g_st=it", ru: "Supermao · Espana Condo 858/1 · шоп на карте", en: "Supermao · Espana Condo 858/1 · shop on the map" }
  ]
};
