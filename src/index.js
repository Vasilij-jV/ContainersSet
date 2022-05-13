export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(charcter) {
    const oldSize = this.members.size;
    this.members.add(charcter);
    const newSize = this.members.size;
    if (oldSize === newSize) {
      throw new Error('Персонаж уже существует!');
    }
  }

  addAll(...charcter) {
    charcter.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
