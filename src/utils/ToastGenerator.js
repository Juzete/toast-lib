import { uid } from 'uid';
import { defaultSizes } from '../presets/toastsDefaultProperties';
import { getToastPropertiesByType } from './getToastPropertiesByType';

export default class ToastGenerator {
  #id;
  #isAnimated;

  get id() {
    return this.#id;
  }
  set isAnimated(condition) {
    this.#isAnimated = condition;
  }
  get isAnimated() {
    return this.#isAnimated;
  }

  constructor(type, text, properties) {
    const [icon, color, textColor, title] = getToastPropertiesByType(type);

    this.type = type;
    this.text = text;
    ({
      width: this.width = 350,
      height: this.height = 70,
      title: this.title = title,
      color: this.color = color,
      textColor: this.textColor = textColor,
      iconSize: this.iconSize = defaultSizes.iconSize,
      fontSize: this.fontSize = defaultSizes.fontSize,
      spacing: this.spacing = 0,
      showDuration: this.showDuration = 0,
      icon: this.icon = icon,
      id: this.#id = uid(),
      isAnimated: this.#isAnimated = true,
      animationName: this.animationName = 'side-push',
      animationDuration: this.animationDuration = 1.5,
    } = properties);
  }

  remove(removeFn) {
    this.animationName = this.animationName + '-remove';
    setTimeout(() => {
      removeFn();
    }, 0);
  }

  timer(removeFn) {
    if (this.showDuration) {
      const timerId = setTimeout(() => {
        removeFn();
      }, this.showDuration);
      return timerId;
    } else {
      return null;
    }
  }
}
