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
    const [icon, backgroundColor, color, title] =
      getToastPropertiesByType(type);

    this.type = type;
    this.text = text;
    ({
      width: this.width = 350,
      height: this.height = 70,
      title: this.title = title,
      backgroundColor: this.backgroundColor = backgroundColor,
      color: this.color = color,
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
    removeFn();
  }

  timer(removeFn) {
    if (this.showDuration) {
      const timerId = setTimeout(() => {
        removeFn();
      }, this.showDuration);
      return timerId;
    }
  }
}
