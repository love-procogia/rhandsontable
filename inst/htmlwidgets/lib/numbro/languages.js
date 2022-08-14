(function () {
    'use strict';

    var language = {
      languageTag: "de-DE",
      delimiters: {
          thousands: ".",
          decimal: ","
      },
      abbreviations: {
          thousand: "k",
          million: "Mi",
          billion: "Ma",
          trillion: "Bi"
      },
      ordinal: function() {
          return ".";
      },
      spaceSeparated: true,
      currency: {
          symbol: "€",
          position: "postfix",
          code: "EUR"
      },
      currencyFormat: {
          totalLength: 4,
          thousandSeparated: true
      },
      formats: {
          fourDigits: {
              totalLength: 4,
              spaceSeparated: true,
              average: true
          },
          fullWithTwoDecimals: {
              output: "currency",
              mantissa: 2,
              spaceSeparated: true,
              thousandSeparated: true
          },
          fullWithTwoDecimalsNoCurrency: {
              mantissa: 2,
              thousandSeparated: true
          },
          fullWithNoDecimals: {
              output: "currency",
              spaceSeparated: true,
              thousandSeparated: true,
              mantissa: 0
          }
      }
    }

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && window.numbro && window.numbro.registerLanguage) {
        this.numbro.registerLanguage(language);
    }
}.call(typeof window === 'undefined' ? this : window));
