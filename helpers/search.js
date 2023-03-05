export default function search(e) {
    setserachV(e.target.value);
    console.log(serachV);
    const persons = users.find((person) => person.name === serachV);
    setsearchedPeople(persons);
    if (persons) {
      setisSearched(true);
      // setisSorted(false);
    } else {
      setisSearched(false);
      // setisSorted(false);
    }

    console.log(searchedPeople, isSearched, "sePeople");
  }