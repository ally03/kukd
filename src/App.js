import React from "react";
import { connect } from "react-redux";
import { updateTestVal } from "./redux/actions/testActions";
import "antd/dist/antd.css";
import { Layout, Card } from "antd";
import products from "../src/products";
import "./App.css";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const App = props => {
  return (
    <Layout className="layout">
      <Header className={"header"}>
        <div className="logo" />
      </Header>
      <Content>
        <h1>Products</h1>
        <div className={"productContainer"}>
          {products.map(product => (
            <Card
              className={"product"}
              key={product.name}
              hoverable
              cover={<img alt="example" height={"300"} src={product.image} />}
            >
              <Meta title={product.name} description={product.description} />
            </Card>
          ))}
        </div>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

const mapStateToProps = state => ({
  testVal: state.testReducer.testVal
});

export default connect(
  mapStateToProps,
  {
    updateTestVal
  }
)(App);
