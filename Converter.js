let country_list = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
  }
  
  const dropList = document.querySelectorAll('.drop-list select'),
  fromCurrency = document.querySelector('.from select'),
  toCurrency = document.querySelector('.to select'),
  exchangeBtn = document.querySelector('form button')
  
  
  for (let i = 0; i < dropList.length; i++) {
    for(currency_code in country_list) {
      // selecting USD by default as FROM currency & VND as TO currency
      let selected
      if(i == 0) selected = currency_code == 'USD' ? 'selected' : ''
      else if(i == 1) selected = currency_code == 'VND' ? 'selected' : ''
  
      // creating option tag with passing currency code as a text & value
      let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`
  
      // inserting options tag inside select tag
      dropList[i].insertAdjacentHTML('beforeend', optionTag)
    }
  
    dropList[i].addEventListener('change', event => {
      loadFlag(event.target) //calling loadFlag with passing target element as an argument
    })
  }
  
  function loadFlag(element) {
    for(code in country_list) {
      // if currency code of country list is equal to option value
      if(code == element.value) {
        let imgTag = element.parentElement.querySelector('img') // selecting img tag of particular drop list
        // passing country code of a selected currency code in a image url
        imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
      }
    }
  }
  
  window.addEventListener('load', () => getExchangeRate())
  
  exchangeBtn.addEventListener('click', event => {
    event.preventDefault() // preventing form from submitting
    getExchangeRate()
  })
  
  const exchangeIcon = document.querySelector('.drop-list .icon')
  exchangeIcon.addEventListener('click', () => {
    let tempCode = fromCurrency.value // temporary currency code of FROM drop list
    fromCurrency.value = toCurrency.value // passing TO currency code to FROM currency code
    toCurrency.value = tempCode // passing temporary currency code to TO currency code
    loadFlag(fromCurrency) // calling loadFlag with passing select element (fromCurrency) of FROM
    loadFlag(toCurrency) // calling loadFlag with passing select element (toCurrency) of TO
    getExchangeRate()
  })
  
  function getExchangeRate() {
    const amount = document.querySelector('.amount input'),
    exchangeRateTxt = document.querySelector('.exchange-rate')
  
    let amountVal = amount.value
    // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
    if(amountVal == '' || amountVal == '0') {
      amount.value = '1'
      amountVal = 1
    }
  
    exchangeRateTxt.innerHTML = 'Getting exchange rate...'
  
    let url = `https://v6.exchangerate-api.com/v6/e993766c6fd84876ef62d8e8/latest/${fromCurrency.value}`
    fetch(url)
      .then(response => response.json())
      .then(jsonResult => {
        let exchangeRate = jsonResult.conversion_rates[toCurrency.value]
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(1)
        exchangeRateTxt.innerHTML = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`
      })
      .catch(() => {
        // if user is offline or any other error occred while fetching data then catch function will return
        exchangeRateTxt.innerHTML = 'Something went wrong'
      })
  }