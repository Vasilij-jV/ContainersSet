import Team from '../index';

test('one character', () => {
  const team = new Team();
  team.members.add('daemon');
  team.members.add('zombie');
  function wrapperAdd() {
    team.add('daemon');
  }

  expect(wrapperAdd).toThrowError('Персонаж уже существует!');
});

test('one character2', () => {
  const team = new Team();
  team.members.add('daemon');
  team.members.add('zombie');
  function wrapperAdd() {
    team.add('undead');
  }

  expect(wrapperAdd).not.toThrowError('Персонаж уже существует!');
});

test('many characters', () => {
  const team = new Team();
  team.members.add('daemon');
  team.members.add('zombie');
  team.addAll('daemon', 'undead');
  team.members.delete('daemon');
  const deleteElem = team.members.has('daemon');

  expect(deleteElem).toBe(false);
});

test('converting a collection to an array', () => {
  const team = new Team();
  team.members.add('daemon');
  team.members.add('zombie');

  expect(team.toArray()).toEqual(['daemon', 'zombie']);
});
