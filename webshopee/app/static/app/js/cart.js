var updateBtns = document.getElementsByClassName('update-cart')
for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId', productId, 'action', action)
        console.log('user: ', user)
            //Kiểm tra đã đăng nhập user hay chưa
        if (user === "AnonymousUser") {
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action) {
    console.log('User logged in, success add') //Trường hợp người dùng chưa đăng nhập
    var url = '/update_item/'
    fetch(url, {
        method: 'POST',
        headers: {

        }


    })
}