## rem a sit

Consequatur accusantium voluptatum ut nesciunt corrupti illo voluptates aut.

```graphviz
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml
```


------------------------------------------------------------------------------------------------------------------------------


```graphviz
@startuml
object Object01
object Object02
object Object03
object Object04
object Object05
object Object06
object Object07
object Object08

Object01 <|-- Object02
Object03 *-- Object04
Object05 o-- "4" Object06
Object07 .. Object08 : some labels
@enduml
```

*Emphasis* and **importance**