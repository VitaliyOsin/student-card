export function validator(data, config) {
  let errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isWeb":
        const webRegExp = /^(?:http|https):\/\/\S+\.\S+./g;
        statusValidate = !webRegExp.test(data);
        break;
      case "min":
        statusValidate = data.length < config.value;
        break;
      case "isNowYeah":
        statusValidate = new Date(Date.now()).getFullYear() < Number(data);
        break;
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
