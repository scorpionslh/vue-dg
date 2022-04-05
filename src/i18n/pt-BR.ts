import { ICalendar, ISettingsArgs, ILang } from "../Config";

const calendar: ICalendar = {
   dateFormat: "DD-MM-YYYY",
   datePlaceholder: "dd-mm-yyyy",
   timeFormat: "HH:mm",
   timePlaceholder: "hh:mm",
   dateTimeFormat: "DD-MM-YYYY HH:mm",
   dateTimePlaceholder: "dd-mm-yyyy hh:mm",
   dayNames: [
      "D",
      "S",
      "T",
      "Q",
      "Q",
      "S",
      "S",
   ],
   monthNamesFull: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
   monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
   weekStart: 1,
   yearFormat: "{year}",
   yearRangeFormat: "{from} - {to}",
   monthFormat: "{month}",
   monthFirst: true
};

const settings: ISettingsArgs = {
   thousandSeparator: " ",
   decimalPrecision: 2,
   decimalSeparator: ","
};

const text: ILang = {
   yes: "Sim",
   no: "Não",
   pagerPage: "Por pagina",
   pagerOfPages: "de",
   firstPage: "Primeiro",
   previousPage: "Anterior",
   nextPage: "Proxima",
   lastPage: "Ultima",
   pageListItemTitle: "Página %page%",
   filterAccept: "OK",
   filterReset: "Limpar",
   dropdownLabel: "Escolha...",
   rangeFrom: "De:",
   rangeTo: "Até:",
   containsValue: "Cotém",
   startsWithValue: "Começa com",
   endsWithValue: "Termina com",
   valueNotEqual: "Diferente",
   valueEqual: "Igual",
   labelValueEquals: "É igual a:"
};

const lang = {
   settings,
   text,
   calendar
};

export default lang;
