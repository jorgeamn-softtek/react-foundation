interface Person {
  fullName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    fullName: "Jorge Mendizabal",
    age: 30,
    address: {
      country: "México",
      houseNo: 123,
    },
    isAlive: true,
  };

  return (
    <>
      <h3>Object Literals</h3>
      <pre>{JSON.stringify(person)}</pre>
    </>
  );
};
