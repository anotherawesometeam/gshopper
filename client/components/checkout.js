import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/userReducer'
import {fetchProduct} from '../store/productsReducer'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      product: [],
      firstName: '',
      lastName: '',
      shippingAddress: '',
      billingAddress: ''
    }
    this.handlChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    ////////////////////////////////////////need a thunk here
  }

  async componentDidMount() {
    console.log('cart mounted')
    try {
      await this.props.fetchCart(this.props.user.orderId)
      await this.props.fetchProduct(this.props.cart.productId)
      console.log('did this work', this.props.product)
    } catch (error) {
      console.error('fetch did not work', error)
    }
  }

  render() {
    console.log(this.props, 'user')
    return (
      <div>
        {<div>something</div>}
        {this.props.cart.map(item => (
          <div key={item.id}>
            <p>{item.quantity}</p>
          </div>
        ))}
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          First Name :
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          Last Name :
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          Shipping Address :
          <input
            type="text"
            value={this.state.shippingAddress}
            onChange={this.handleChange}
          />
          <br />
          Billing Address :
          <input
            type="text"
            value={this.state.billingAddress}
            onChange={this.handleChange}
          />
          <br />
          <button
            type="button"
            className="checkout"
            onClick={() => {
              this.handleChange(this.props.user)
            }}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  cart: state.userReducer.cart,
  products: state.productsReducer.products
})

const mapDispatchToProps = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId)),
  fetchProduct: productId => dispatch(fetchProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
