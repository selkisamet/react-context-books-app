========== Context Tipleri ==========

1. Yöntem: Default Value
    
- Context nesnesini oluşturdum.
- Default olarak Array tipinde bir veri atayıp dışa aktardım.
- İlgili component'e import ettim.

2. Yöntem: Provider

- Veriyi bir books adında bir stateye atadım.
- Context'e ait Provider ile State'te bulunan veriyi aldım.
- Parent Child ilişkisini kurdum. index.js içinde uygulamayı BookContextProvider ile sardım.
- Veriyi göndereceğim component'e Context'i import ettim.
- Context'ten gelen veriyi ( const booksContext = useContext(BookContext); ) bu şekilde aldım ve kullandım.
- Context'ten gelen veriyi Consumer ile de  ( BookContext.Consumer ) bu şekilde alabilirim. 
