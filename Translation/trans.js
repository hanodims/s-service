import { I18nManager } from "react-native";

import * as Localization from "expo-localization";
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export const checkForLang = async () => {
//   console.log("im here");
//   const lan = await AsyncStorage.getItem("lang");

//   if (lan) {
//     init(lan);
//   } else {
//     init(Localization.locale.slice(0, 2));
//   }
// };

// export const setLang = async (lan) => {
//   await AsyncStorage.setItem("lang", lan);
//   init(lan);

//   try {
//     await Updates.reloadAsync();
//   } catch (err) {
//     console.error("err", err);
//   }
// };

export const translationGetters = {
  ar: () => require("./ar.json"),
  en: () => require("./en.json"),
};

export const IMLocalized = memoize(
  (key, config) =>
    i18n.t(key, config).includes("missing") ? key : i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const init = (lan) => {
  let localeLanguageTag = lan;
  let isRTL = Localization.isRTL;
  console.log(isRTL);

  IMLocalized.cache.clear();

  // update layout direction
  I18nManager.forceRTL(localeLanguageTag == "ar" ? true : false);
  //I18nManager.allowRTL(isRTL);
  // set i18n-js config

  try {
    i18n.translations = {
      [localeLanguageTag]: translationGetters[localeLanguageTag](),
    };
  } catch {
    i18n.translations = {
      [localeLanguageTag]: translationGetters["en"](),
    };
  }
  i18n.locale = localeLanguageTag;
};
