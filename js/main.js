$(document).on('scroll', e => {
	// let top = $('.product-2')
	let eleList = [
		$('.product-2')[0],
		$('.product-3')[0],
		$('.product-4')[0]
	]
	let boole = eleList.filter(ele => isEleVisible(ele))
	if(boole.length > 0){
    boole.forEach(ele=>{
      ele.classList.add('product-show')
    })
  }
})

function isEleVisible(ele) {
	var {
		top,
		right,
		bottom,
		left
	} = ele.getBoundingClientRect()
	var w = window.innerWidth
	var h = window.innerHeight
	if (bottom < 0 || top > h) {
		// y 轴方向
		return false
	}
	if (right < 0 || left > w) {
		// x 轴方向
		return false
	}
	return true
}
