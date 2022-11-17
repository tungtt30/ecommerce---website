import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shopping-cart/cartitemsSlice'
import { remove } from '../redux/product-modal/ProductModalSlice'

const ProductView = props => {

    const dispatch = useDispatch()
    let product = props.product

    if (product === undefined) product = {
        price: 0, title: '', colors: [], size: [],

    }

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [expand, setExpand] = useState()

    const [color, setColor] = useState(undefined)
    const [size, setSize] = useState(undefined)
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setColor(undefined)
        setSize(undefined)
        setQuantity(1)
    }, [product])

    const check = () => {

        if (color === undefined) {
            alert('vui lòng chọn màu sắc')
            return false
        }
        if (size === undefined) {
            alert('vui lòng chọn size')
            return false
        }
        return true
    }
    const addToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }))

            dispatch(remove())
            alert("Thêm thành công")
        }
    }

    const goToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price

            }))
            dispatch(remove())
            props.history.push('/cart')
        }
    }

    return (
        <div className='product'>
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt='' />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt='' />
                    </div>
                </div>
                <div className="product__images__main">
                    <img alt='' src={previewImg} />
                </div>

                <div className={`product-description ${expand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        chi tiết sản phẩm
                    </div>

                    <div className="product-description__content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    >
                    </div>
                    <div className="product-description__toggle">
                        <Button size='sm' onClick={() => setExpand(!expand)}>
                            {
                                expand ? 'thu gọn' : 'xem thêm'
                            }
                        </Button>
                    </div>
                </div>
            </div>

            <div className="product__info">
                <h1 className="product__info__title">
                    {product.title}
                </h1>

                <div className="product__info__item">
                    <span className="product__info__item__price">{numberWithCommas(product.price)}</span>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu sắc
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item, index) => {
                                return (
                                    <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)} >
                                        <div className={`circle bg-${item}`}>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        size
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.size.map((item, index) => {
                                return (
                                    <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                        <span className="product__info__item__list__item__size">
                                            {item}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                            <i className='bx bx-minus'></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button backgroundColor='orange' onClick={addToCart}>Thêm vào giỏ hàng</Button>
                    <Button onClick={goToCart}>Mua Ngay</Button>
                </div>
            </div>
            <div className={`product-description mobile ${expand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    chi tiết sản phẩm
                </div>

                <div className="product-description__content"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                >
                </div>
                <div className="product-description__toggle">
                    <Button size='sm' onClick={() => setExpand(!expand)}>
                        {
                            expand ? 'thu gọn' : 'xem thêm'
                        }
                    </Button>
                </div>
            </div>
        </div >
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)