import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://www.vittoriacoffee.com/cdn/shop/articles/australian-coffee-types_1x.svg?v=1725341955",
      title: "Americano",
      subTitle: "a drink that retains the complex flavors of espresso, but in a lighter way.",
      price: 2,
      id : 1
    },
    {
      image:
        "https://img.freepik.com/premium-photo/cup-coffee-table-cafe-close-up_960782-5176.jpg",
      title: "Cappuccino",
      subTitle: "prepared with steamed milk including a layer of milk foam.",
      price: 2,
      id : 2
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUcXNGz_R-oEtKb6XX_jbyqwV053E3xXUIWiuMy1akhFFGTvdUtYw-9MPtXEKWIk38ZbI&usqp=CAU",
      title: "Latte",
      subTitle: "a coffee drink of Italian origin made with espresso and steamed milk",
      price: 4,
      id : 3
    },
    {
      image:
        "https://images.unsplash.com/photo-1680898077129-e832d1c6e01c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhdHRlJTIwYXJ0fGVufDB8fDB8fHww",
      title: "Caffè macchiato",
      subTitle: "coffee drink with a small amount of milk",
      price: 3,
      id : 4
    },
    {
      image:
        "https://5.imimg.com/data5/GN/RG/GLADMIN-10207619/latte.png",
      title: "Mocha",
      subTitle: " a coffee and hot chocolate hybrid. ",
      price: 1,
      id : 5
    },
    {
      image:
        "https://img.freepik.com/premium-photo/hot-coffee-capuccino-cup-with-latte-art-wood-table-cafe_778722-16.jpg",
      title: "Cold brew",
      subTitle: " made by steeping coarsely ground coffee in room temperature. ",
      price: 3,
      id : 5
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              id={item.id}
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
