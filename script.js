window.addEventListener('load', () => {

    $(document).on('click', '.about-item', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
});