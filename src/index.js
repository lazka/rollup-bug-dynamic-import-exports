async function foo() {
    const x = (await import('fabric')).fabric;
    console.log(x); // this is undefined but wasn't with 12.0.0
}

foo();