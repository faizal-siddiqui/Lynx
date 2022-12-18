import axios from "axios";

// for editing quantity and sizes in api

export const editQty = async (newData) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_PRODUCTS}/profile/1`,
      {
        cart: newData,
      }
    );
  } catch (err) {
    console.log("err:", err);
  }
};

// for changing qty in data

export const changeQty = (data, el, size) => {
  const newData =
    data &&
    data.map((element) => {
      if (element.name == el.name) {
        element.qty = size;
      }
      return element;
    });

  return newData;
};

// for changing size in data

export const changeSize = (data, el, size) => {
  const newData =
    data &&
    data.map((element) => {
      if (element.name == el.name) {
        element.sizes = size;
      }
      return element;
    });

  return newData;
};

// empty the cart
export const removeCartData = (cart, el) => {
  const newData =
    cart &&
    cart.filter((element) => {
      return element.name != el.name;
    });

  return newData;
};

// findMrp
const findMrp = (cart) => {
  const Mrp = cart.reduce((acc, el) => {
    console.log(el.mrp);
    console.log(el.qty);
    return acc + el.mrp * el.qty;
  }, 0);
  console.log(cart);
  console.log(Mrp);
};
