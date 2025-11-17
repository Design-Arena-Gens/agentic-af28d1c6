'use client'

import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'King Kohli Cricket Romper',
    price: 899,
    sizes: ['0-3M', '3-6M', '6-12M'],
    color: 'Blue',
    description: 'Comfortable cotton romper with Virat Kohli signature style'
  },
  {
    id: 2,
    name: 'Indian Blue Jersey Set',
    price: 1299,
    sizes: ['0-3M', '3-6M', '6-12M', '12-18M'],
    color: 'Blue',
    description: 'Premium jersey-style outfit inspired by Team India colors'
  },
  {
    id: 3,
    name: 'Champion #18 Onesie',
    price: 699,
    sizes: ['0-3M', '3-6M', '6-12M'],
    color: 'White',
    description: 'Soft onesie featuring Kohli\'s iconic jersey number'
  },
  {
    id: 4,
    name: 'Little Cricket Star Tracksuit',
    price: 1599,
    sizes: ['6-12M', '12-18M', '18-24M'],
    color: 'Navy Blue',
    description: 'Sporty tracksuit for active little champions'
  },
  {
    id: 5,
    name: 'Victory Celebration T-Shirt',
    price: 549,
    sizes: ['0-3M', '3-6M', '6-12M', '12-18M'],
    color: 'Orange',
    description: 'Vibrant t-shirt celebrating cricket victories'
  },
  {
    id: 6,
    name: 'Future Captain Hoodie',
    price: 1099,
    sizes: ['6-12M', '12-18M', '18-24M'],
    color: 'Grey',
    description: 'Cozy hoodie for your future cricket captain'
  }
]

export default function Home() {
  const [cart, setCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const addToCart = (product, size) => {
    setCart([...cart, { ...product, selectedSize: size, cartId: Date.now() }])
    setSelectedProduct(null)
  }

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#003366',
        color: 'white',
        padding: '20px 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold' }}>👶 Virat Kohli Baby Collection</h1>
          <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Premium Cricket-Inspired Baby Boy Clothing</p>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Hero Banner */}
        <div style={{
          backgroundColor: '#ff6b35',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{ margin: '0 0 15px 0', fontSize: '28px' }}>🏏 Dress Your Little Champion</h2>
          <p style={{ margin: 0, fontSize: '18px' }}>Inspired by cricket legend Virat Kohli - Premium quality for your baby boy</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
          {/* Products Grid */}
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '25px', color: '#333' }}>Our Collection</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '25px'
            }}>
              {products.map(product => (
                <div key={product.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    backgroundColor: product.color === 'Blue' ? '#4A90E2' :
                                   product.color === 'White' ? '#f0f0f0' :
                                   product.color === 'Navy Blue' ? '#1e3a5f' :
                                   product.color === 'Orange' ? '#ff6b35' :
                                   '#808080',
                    height: '180px',
                    borderRadius: '8px',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '60px'
                  }}>
                    👕
                  </div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#333' }}>{product.name}</h4>
                  <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
                    {product.description}
                  </p>
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {product.color}
                    </span>
                  </div>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366', margin: '10px 0' }}>
                    ₹{product.price}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e55a2b'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              position: 'sticky',
              top: '20px'
            }}>
              <h3 style={{ margin: '0 0 20px 0', fontSize: '22px', color: '#333' }}>
                🛒 Shopping Cart ({cart.length})
              </h3>

              {cart.length === 0 ? (
                <p style={{ color: '#999', textAlign: 'center', padding: '30px 0' }}>
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div style={{ marginBottom: '20px', maxHeight: '400px', overflowY: 'auto' }}>
                    {cart.map((item) => (
                      <div key={item.cartId} style={{
                        padding: '15px',
                        borderBottom: '1px solid #eee',
                        marginBottom: '10px'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                          <div style={{ flex: 1 }}>
                            <p style={{ margin: '0 0 5px 0', fontWeight: '600', fontSize: '14px' }}>
                              {item.name}
                            </p>
                            <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#666' }}>
                              Size: {item.selectedSize}
                            </p>
                            <p style={{ margin: 0, fontWeight: 'bold', color: '#003366' }}>
                              ₹{item.price}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            style={{
                              backgroundColor: '#ff4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '5px 10px',
                              cursor: 'pointer',
                              fontSize: '12px'
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    borderTop: '2px solid #003366',
                    paddingTop: '20px',
                    marginTop: '20px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      color: '#003366'
                    }}>
                      <span>Total:</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <button style={{
                      width: '100%',
                      padding: '15px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Size Selection Modal */}
      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
        onClick={() => setSelectedProduct(null)}
        >
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            maxWidth: '400px',
            width: '90%'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ margin: '0 0 20px 0', color: '#333' }}>{selectedProduct.name}</h3>
            <p style={{ marginBottom: '20px', color: '#666' }}>Select a size:</p>
            <div style={{ display: 'grid', gap: '10px' }}>
              {selectedProduct.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => addToCart(selectedProduct, size)}
                  style={{
                    padding: '15px',
                    backgroundColor: '#003366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                width: '100%',
                marginTop: '15px',
                padding: '12px',
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        backgroundColor: '#003366',
        color: 'white',
        padding: '30px 0',
        marginTop: '60px',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>© 2025 Virat Kohli Baby Collection - Premium Quality for Little Champions</p>
      </footer>
    </div>
  )
}
