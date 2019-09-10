import React, { Component } from 'react';
import './ProductPage.css';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from "react-bootstrap";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Product from '../../Product';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
    }
    
    choiceRatingComment(type, e) {
        const span = document.getElementById('rating');
        let arr = span.children;
        let elem = '';
        let id = 0;
        switch (type) {
            case 'leave': {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].getAttribute('canChange') == 'true')
                        arr[i].style.color = 'rgb(207, 207, 207)';
                }
                break
            };
            case 'hover': {
                elem = e.target;
                id = parseInt(elem.getAttribute('rating'));

                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].getAttribute('canChange') == 'true')
                        arr[i].style.color = 'rgb(207, 207, 207)';
                    else {
                        arr[i].style.color = 'black';
                    }
                }
                for (var i = 0; i < id; i++) {
                    arr[i].style.color = 'rgb(44, 44, 44)';
                }

                break;
            }
            case 'click': {

                elem = e.target;
                id = parseInt(elem.getAttribute('rating'));
                alert(id);
                for (var i = 0; i < id; i++) {
                    arr[i].style.color = 'rgb(44, 44, 44)';
                    arr[i].setAttribute('canChange', 'false');
                }
                for (var i = arr.length - 1; i >= id; i--) {
                    arr[i].setAttribute('canChange', 'true');
                    if (arr[i].getAttribute('canChange') == 'true') {
                        arr[i].style.color = 'rgb(207, 207, 207)';
                    }
                }
                break
            };
            default: break;
        }

    }
    imageZoom(type,e){
        var modal = document.getElementById('modal');
        if(type=='show'){
        modal.style.display = 'block';
        const elem = document.getElementById('zoom-img');
        var src = '';
        src = e.target.style.backgroundImage;
        src = src.slice(5, src.length-2); //put url("");
        elem.setAttribute('src', src);
        }
        if(type=='hide'){
            modal.style.display = 'none';
        }
    }
    hide_show(id) {
        let elem = document.getElementById(id);
        if (elem.getAttribute('class') == 'hidden') {
            elem.setAttribute('class', 'visible');
        }
        else {
            elem.setAttribute('class', 'hidden');
        }
    }
    render() {
        return (
            <div className='product-page container'>
                <div id='modal' className='modal'>
                    <img id='zoom-img' className='zoom-img' />
                    <button onClick={()=>this.imageZoom('hide',null)} className='close-modal'>X</button>
                </div>
               
                <Row>
                    <Col lg={6}>
                        <CarouselProvider
                            naturalSlideWidth={70}
                            naturalSlideHeight={95}
                            totalSlides={4}>
                            <Slider classNameTray='test'>
                                <Slide index={0}><ImageWithZoom onClick={(e)=>{this.imageZoom('show',e)}} src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416c-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg' />
                                </Slide>
                                <Slide index={1}><ImageWithZoom onClick={(e)=>{this.imageZoom('show',e)}} src='https://gard.com.ua/image/cache/catalog/shop/products/b917841c-ce0e-11e8-ab13-ee24cb1b971f-930x1240.jpg' />
                                </Slide>
                                <Slide index={2}><ImageWithZoom onClick={(e)=>{this.imageZoom('show',e)}} src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg' />
                                </Slide>
                                <Slide index={3}><ImageWithZoom onClick={(e)=>{this.imageZoom('show',e)}} src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg' />
                                </Slide>
                            </Slider>
                            <ButtonBack className='button-move back' />
                            <ButtonNext className='button-move next' />
                            <DotGroup className='dot-group' />
                            <div className='dot-group-image'>
                                <Dot slide={0} className='dot-image' >
                                    <Image src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416c-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg'></Image>
                                </Dot>
                                <Dot slide={1} className='dot-image' >
                                    <Image src='https://gard.com.ua/image/cache/catalog/shop/products/b917841c-ce0e-11e8-ab13-ee24cb1b971f-930x1240.jpg'></Image>
                                </Dot>
                                <Dot slide={2} className='dot-image' >
                                    <Image src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg'></Image>
                                </Dot>
                                <Dot slide={3} className='dot-image' >
                                    <Image src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg'></Image>
                                </Dot>
                            </div>
                        </CarouselProvider>
                    </Col>
                    <Col lg={6}>
                        <div className='content'>
                            <div><h2 className='title'>Рюкзак DOUBLE-TOP I flowers 3/19</h2></div>
                            <div><h2 className='price'>785 грн</h2></div>
                            <div className='review'>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <span>
                                    0 відгуків
                                </span>
                            </div>
                            <div className='size-grid'>
                                <button onClick={() => { this.hide_show('size-grid-div') }}>РОЗМІРНА СІТКА<i class="fa fa-chevron-down"></i></button>
                                <div id='size-grid-div' className='hidden'><img width='100%' src='https://gard.com.ua/image/catalog/shop/STRU_aea1bb99-cb02-11e9-af8a-9e1680149fdf.jpg'></img></div>
                            </div>
                            <div className='size'>
                                <span>Розмір:</span><br />
                                <input type='radio' value='40' name='size' id='size-40' />
                                <input type='radio' value='41' name='size' id='size-41' />
                                <input type='radio' value='42' name='size' id='size-42' />
                                <input type='radio' value='43' name='size' id='size-43' />
                            </div>
                            <div className='counter'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='button-number'>
                                            <Button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }} id='decrement'>-</Button>
                                            <input type='text' value={this.state.counter}></input>
                                            <Button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }} id='increment'>+</Button>
                                        </div>
                                    </Col>
                                    <Col lg={8}>
                                        <Button className='order-btn'>Замовити</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className='description'>
                                <p>Матеріал - еко-шкіра.</p>
                                <p>Якісна поліуретанова підошва.</p>
                                <p>Ці кеди найкраще поєднувати з штанами чінос або джинсами трохи звуженого крою.</p>
                            </div>
                            <div className='add-review'>
                                <Button onClick={() => this.hide_show('new-review')}>ВІДГУКІВ (0)</Button>
                                <div className='hidden' id='new-review'>
                                    <h3>Написати відгук</h3>
                                    <input type="text" className="form-control" placeholder="Ваше ім'я" />
                                    <textarea className="form-control" placeholder="Ваш відгук" />
                                    <span>ОЦІНКА</span><br />
                                    <span id='rating' onMouseLeave={() => this.choiceRatingComment('leave', null)}>
                                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                                            onClick={(e) => this.choiceRatingComment('click', e)}
                                            class="fa fa-star" rating='1'></i>
                                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                                            onClick={(e) => this.choiceRatingComment('click', e)}
                                            class="fa fa-star" rating='2'></i>
                                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                                            onClick={(e) => this.choiceRatingComment('click', e)}
                                            class="fa fa-star" rating='3'></i>
                                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                                            onClick={(e) => this.choiceRatingComment('click', e)}
                                            class="fa fa-star" rating='4'></i>
                                        <i canChange='true' onMouseEnter={(e) => this.choiceRatingComment('hover', e)}
                                            onClick={(e) => this.choiceRatingComment('click', e)}
                                            class="fa fa-star" rating='5'></i>
                                    </span>
                                    <br />
                                    <Button>ВІДПРАВИТИ ВІДГУК</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h4 style={{marginLeft:'75px',marginTop:'70px'}}>РЕКОМЕНДОВАННІ ТОВАРИ</h4>
                    <div style={{margin:'0px 80px 0px 80px'}} >
                    <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/790ff25c-6d88-11e9-af82-9e1680149fdf-450x600.jpg'
                        src_second='https://gard.com.ua/image/cache/catalog/shop/products/790ff25e-6d88-11e9-af82-9e1680149fdf-450x600.jpg' />
                    <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/ccc1c473-6cac-11e9-af82-9e1680149fdf-450x600.jpg'
                        src_second='https://gard.com.ua/image/cache/catalog/shop/products/ccc1c474-6cac-11e9-af82-9e1680149fdf-450x600.jpg' />
                    <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/790ff25c-6d88-11e9-af82-9e1680149fdf-450x600.jpg'
                        src_second='https://gard.com.ua/image/cache/catalog/shop/products/790ff25e-6d88-11e9-af82-9e1680149fdf-450x600.jpg' />
                    <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/790ff25c-6d88-11e9-af82-9e1680149fdf-450x600.jpg'
                        src_second='https://gard.com.ua/image/cache/catalog/shop/products/790ff25e-6d88-11e9-af82-9e1680149fdf-450x600.jpg' />
                    </div>
                </Row>
            </div>
        );
    }
}
export default ProductPage;