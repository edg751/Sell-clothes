import DetailPage from "features/Product/pages/DetailPage";
import ListPage from "features/Product/pages/ListPage";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Cart from "./features/Cart/cart";
import Bottom from "components/Bottom";
import CartPage from "features/Cart/pages/cartPage";

import CartDetail from "features/Cart/pages/cartDetail";
import AdminDashboard from "features/Administrator/AdminDashboard";
import React, { useState } from "react";
import OrderDetail from "features/Administrator/order/OrderDetail";
import OderList from "features/Administrator/order/OderList";
import AddProductForm from "features/Administrator/product/addProduct";
import DetailProductForm from "features/Administrator/product/detailProduct";
import ProductList from "features/Administrator/product/productList";
import CategoryList from "features/Administrator/category/CategoryList";
import AddCategory from "features/Administrator/category/AddCategory";
import DetailCategory from "features/Administrator/category/DetailCategory";
import AddMaterial from "features/Administrator/material/AddMaterial";
import MaterialList from "features/Administrator/material/MaterialList";
import DetailMaterial from "features/Administrator/material/DetailMaterial";
import StyleList from "features/Administrator/style/StyleList";
import AddStyle from "features/Administrator/style/AddStyle";
import DetailStyle from "features/Administrator/style/DetailStyle";
import ColorList from "features/Administrator/color/ColorList";
import AddColor from "features/Administrator/color/AddColor";
import DetailColor from "features/Administrator/color/DetailColor";
import DeliveryDetail from "features/Administrator/delivery/DeliveryDetail";
import DeliveryList from "features/Administrator/delivery/DeliveryList";
import FavoriteProductList from "features/Product/components/FavoriteProductList";
import PasswordForm from "features/Auth/components/ResetPassForm/PasswordForm";
import LoginAdministrator from "features/Administrator/login/LoginAdministrator";
import UpdateProduct from "features/Administrator/product/updateProduct";
import AddressProfile from "features/Auth/components/Profile/AddressProfile";
import IndexPage from "features/Product/components/IndexPage";
import FeedBack from "features/Product/components/FeedBack";
import Profile from "features/Product/pages/Profile";
import NotificationList from "features/Administrator/notifycation/NotifycationList";
import AddNotification from "features/Administrator/notifycation/AddNotifycation";
import DetailNotification from "features/Administrator/notifycation/DetailNotifycation";
import SeniorAdminDashboard from "features/SeniorAdministrator/SeniorAdminDashboard";
import PromotionList from "features/SeniorAdministrator/promotion/PromotionList";
import AddPromotion from "features/SeniorAdministrator/promotion/AddPromotion";
import ProductListPromotion from "features/SeniorAdministrator/promotion/ProductListPromotion";
import AddProductListPromotion from "features/SeniorAdministrator/promotion/AddProductListPromotion";
import Statistical from "features/Administrator/statistical/Statistical";
import DetailPromotion from "features/SeniorAdministrator/promotion/DetailPromotion";
import LoginSeniorAdministrator from "features/SeniorAdministrator/login/LoginSeniorAdministrator";
import EmployeeList from "features/SeniorAdministrator/employee/EmployeeList";
import AddEmployee from "features/SeniorAdministrator/employee/AddEmployee";
import DetailEmployee from "features/SeniorAdministrator/employee/DetailEmployee";
import UserList from "features/user/userList";
import TestUploadAPI from "features/Administrator/upload/TestUploadAPI";

function App() {
  const location = useLocation();
  const [isInAdmin, setIsInAdmin] = useState(
    location.pathname.startsWith("/admin")
  );
  const handleSearch = (value) => {
    console.log("Search: ", value);
    setSearchValue(value);
  };
  const [searchValue, setSearchValue] = React.useState("");
  const [addToCartClick, setAddToCartClick] = React.useState("");
  const handleAddToCartClick = (value) => {
    setAddToCartClick(value);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<LoginAdministrator />} />
        <Route
          path="/admin-senior/login"
          element={<LoginSeniorAdministrator />}
        />
        <Route path="/admin/ProductList" element={<ProductList />} />
        <Route path="/admin/addProduct" element={<AddProductForm />} />
        <Route
          path="/admin/updateProduct/:productid"
          element={<UpdateProduct />}
        />
        <Route
          path="/admin/productDetail/:productid"
          element={<DetailProductForm />}
        />
        <Route path="/admin/oderdetail/:orderid" element={<OrderDetail />} />
        <Route path="/admin/order" element={<OderList />} />
        <Route
          path="/admin/deliverydetail/:deliveryid"
          element={<DeliveryDetail />}
        />
        <Route path="/admin/delivery" element={<DeliveryList />} />
        <Route path="/admin/categoryList" element={<CategoryList />} />
        <Route path="/admin/addCategory" element={<AddCategory />} />
        <Route
          path="/admin/detailCategory/:categoryid"
          element={<DetailCategory />}
        />
        <Route path="/admin/materialList" element={<MaterialList />} />
        <Route path="/admin/addMaterial" element={<AddMaterial />} />
        <Route path="/admin/uploadImage" element={<TestUploadAPI />} />

        <Route
          path="/admin/senior-admin/statistical"
          element={<Statistical />}
        />
        <Route
          path="/admin/detailMaterial/:materialid"
          element={<DetailMaterial />}
        />
        <Route path="/admin/styleList" element={<StyleList />} />
        <Route path="/admin/userList" element={<UserList />} />

        <Route path="/admin/addStyle" element={<AddStyle />} />
        <Route path="/admin/detailStyle/:styleid" element={<DetailStyle />} />
        <Route path="/admin/colorList" element={<ColorList />} />
        <Route path="/admin/addColor" element={<AddColor />} />
        <Route path="/admin/detailColor/:colorid" element={<DetailColor />} />
        <Route path="/admin/notificationList" element={<NotificationList />} />
        <Route path="/admin/addNotification" element={<AddNotification />} />
        <Route
          path="/admin/detailNotification/:notificationid"
          element={<DetailNotification />}
        />
        <Route path="/admin/senior-admin" element={<SeniorAdminDashboard />} />
        <Route
          path="/admin/senior-admin/promotion"
          element={<PromotionList />}
        />
        <Route path="/admin/senior-admin/employee" element={<EmployeeList />} />
        <Route
          path="/admin/senior-admin/addPromotion"
          element={<AddPromotion />}
        />
        <Route
          path="/admin/senior-admin/addEmployee"
          element={<AddEmployee />}
        />
        <Route
          path="/admin/senior-admin/detailEmployee/:idEmployee"
          element={<DetailEmployee />}
        />
        <Route
          path="/admin/senior-admin/detailPromotion/:promotionid"
          element={<DetailPromotion />}
        />
        <Route
          path="/admin/senior-admin/ProductListPromotion/:promotionid"
          element={<ProductListPromotion />}
        />
        <Route
          path="/admin/senior-admin/addProductListPromotion/:promotionid"
          element={<AddProductListPromotion />}
        />
      </Routes>

      {!isInAdmin && (
        <Header handleSearch={handleSearch} addToCartClick={addToCartClick} />
      )}

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/products/:gender"
          element={<ListPage searchValue={searchValue} />}
        />
        <Route
          path="/products/:gender/:productId"
          element={<DetailPage handleAddToCartClick={handleAddToCartClick} />}
        />
        <Route path="/favorite" element={<FavoriteProductList />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/detail" element={<CartDetail />} />
        <Route path="/resetPassword/:token" element={<PasswordForm />} />

        <Route path="/profile" element={<AddressProfile />} />
      </Routes>

      {!isInAdmin && <Bottom />}
    </div>
  );
}

export default App;
