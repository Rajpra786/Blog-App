## Design principles
http://blog.wolksoftware.com/implementing-solid-and-the-onion-architecture-in-node-js-with-typescript-and-inversifyjs
1. The separation of concerns (SoC) principle
Concerns are the different aspects of software functionality. For instance, the “business logic” of software is a concern, and the interface through which a person uses this logic is another concern.
2. The SOLID principles
> Single responsibility principle : A class should have only a single responsibility
> Open/Close principle: Software entities should be open for extension, but closed for modification.
> Liskov substitution principle:  Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
> Interface segregation principle: Many client-specific interfaces are better than one general-purpose interface.
> Dependency inversion principle:One should depend upon abstractions, [not] concretions.

3. The model-view-controller (MVC) design pattern