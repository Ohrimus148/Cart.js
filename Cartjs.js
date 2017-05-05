$(function() {
	function Cart() {
		var _self=this;
		//this.lsFieldId='cartNew';
		this.domElems={
			cart:$('.cart'),
			itemTmpl:$('.cart_item_tmpl'),
			totalPrice: $('.cart .totals .price'),
			orderButton:$('cart_make-order')
		};	
		 // this.cartArray='';
		this.cartArray=[
			{
			id:'a-12',
			name:'Socks',
			price:'15',
			qty:'3'
			},
			{
			id:'a-13',
			name:'Trousers',
			price:'50.5',
			qty:'2'	
			},
			{
			id:'a-14',
			name:'Watch',
			price:'150.5',
			qty:'1'	
			}
		];
		$('.bigcart').click(function(e){
		var item={
			id:'a-15',
			name:'key',
			price:'150.5',
			qty:'2'	
			};
			_self.addToCart(item);
			
		});
	}
	Cart.prototype.init=function() {
		//window.ls.initField(this.lsFieldId);
		this.viewCart();
	};
	/*Cart.prototype.updateStorage=function() {
		window.ls.updateField(this.lsFieldId, this.cartArray);
	};*/
	Cart.prototype.getCartItems=function(){
		//return this.cartArray;
		//console.log(this.cartArray);
		//return window.ls.getFieldData(this.lsFieldId);
		//this.cartArray=window.ls.getFieldData(this.lsFieldId);
		return this.cartArray;
		
	};
	Cart.prototype.getCartSize=function(){
		//console.log(this.getCartItems().length);
		return this.getCartItems().length;
	};
	Cart.prototype.getTotalPrice=function(){
		var items=this.getCartItems(),
		totalPrice=0;
		items.forEach(function(item) {
		totalPrice+=item.price*item.qty;		
		});
		
		return totalPrice;
		
	};
	
	Cart.prototype.viewCart=function() {
		//TODO: make viewCartSize
		this.getCartSize();
		this.viewTotalPrice();
		this.viewCartList();
		
	};
	
	Cart.prototype.viewCartList=function(){
		var _self=this, 
			items=this.getCartItems(),
			listHtml=[];
		items.forEach(function(item) {
			listHtml.push(_self.viewCartItem(item));
		});
		this.clearViewCart();
		$('.cart .totals').before(listHtml);
		
	};
	
	Cart.prototype.clearViewCart=function() {
		$('.cart_item').remove();
		
	};
	Cart.prototype.viewCartItem=function(item) {
		
		var tmpl=this.domElems.itemTmpl.clone().removeClass('cart_item_tmpl'),
		itemPrice=item.qty*item.price;
		tmpl.find('.quantity').text(item.qty);
		tmpl.find('.itemName').text(item.name);
		tmpl.find('.price').text('$'+itemPrice);
		return tmpl;
		console.log(tmpl);
	};
	Cart.prototype.addToCart=function(item){
		this.cartArray.push(item);
		/*this.updateStorage();*/
		this.viewCart();
	};
	Cart.prototype.viewTotalPrice=function() {
		
		this.domElems.totalPrice.text('$'+this.getTotalPrice());
		
	};
	window.cart=new Cart();
	cart.init();
	
});