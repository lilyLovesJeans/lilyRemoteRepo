<script setup>

</script>

<template>
    <div id="header"> 
        <div id="header_top" class="header_content">
            <div id="header_top_inner" class="header_inner">
                <div id="header_funcBtn_wrapper">
                    <a href="" class="wsj_btn premium_btn header_funcbtn">
                        <div class="submit_wsj_btn">訂閱華爾街日報</div>
                    </a>
                    <a href="/support-us" class="header_funcbtn support_us_btn" >
					<div class="support_us">支持風傳媒</div>
				</a>

                <a href="" id="login_btn" class="member_func header_funcbtn active" rel="nofollow">
					
					<svg version="1.1" id="header_member_btn_icon" class="btn_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
            <g>
              <path class=
                "st0" d="M430.8,425.9c0-63-38.2-122-94.7-152.6c-9.9-5.4-21.4-7.9-33-7.3c-16.2,0.9-34.2,1.4-53.1,1.4s-36.9-0.5-53.1-1.4c-11.5-0.6-23,1.9-33,7.3c-56.5,30.6-94.7,89.6-94.7,152.6c0,0.6-0.2,11.9-0.4,23.1c-0.2,12.4,10.7,22.5,24.3,22.5h313.7c13.6,0,24.5-10.1,24.3-22.5C431,437.8,430.8,426.5,430.8,425.9z">
                
              </path>
							<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -26.8847 216.7147)" class="st0" cx="248.2" cy="140.8" rx="112.2" ry="112.2">
							  
							</ellipse>
						</g>
					</svg>
					<span class="btn_text">會員專區</span>
</a>
                </div>
            </div>
        </div>
        <div id="header_bottom" class="header_content">
            <div id="header_bottom_inner" class="header_inner">
                <div id="logo_block">
 
                    <a href="/" id="logo" >
                    <img src="https://www.storm.mg/images/logo.svg" alt="風傳媒" id="logo_img" >
                    <img src="https://www.storm.mg/images/logo_CT.svg" alt="" id="logo_img_article" class="svg_content"  data-src="https://www.storm.mg/images/logo_CT.png">
                    </a>

                </div>
                <div id="main_nav_wrapper"></div>
            </div>
        </div>
    </div>
</template>



<style scoped>


#header .header_content#header_top #header_top_inner #header_funcBtn_wrapper
{
    display: flex;
    position: absolute;
    top: 10px;
    right: 0;
    text-align: right;
    z-index: 10;
}

.submit_wsj_btn {
    background: linear-gradient(313deg, #e1c741 0.12%, #e7a00c 99.91%);
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    line-height: 28px;
    color: #fff;
    font-size: 15px;

}

.support_us {
    background: linear-gradient(313deg, #f83b35 0.12%, #7c312f 99.91%);
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    line-height: 28px;
    color: #fff;
    font-size: 15px;
}

.support_us_btn {
    padding: 0px !important;
    margin-left: 5px;
}
#header .header_content#header_top #header_top_inner #header_funcBtn_wrapper .header_funcbtn.premium_btn.wsj_btn {
    margin-bottom: -3px;
    padding: 0;
}

#header .header_content#header_top #header_top_inner #header_funcBtn_wrapper .header_funcbtn {
    display: inline-block;
    vertical-align: middle;
    padding: 3px 5px;
    color: #999;
    fill: #999;

}


.btn_icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
}

#header .header_content#header_top #header_top_inner #header_funcBtn_wrapper .header_funcbtn .btn_text {
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    max-width: 100px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
}


@media screen and (max-width: 768px)
{
    body#article #header #header_bottom #header_bottom_inner #logo_block #logo #logo_img_article {
    display: block;

    }
    body#article #header #header_bottom #header_bottom_inner #logo_block #logo #logo_img {
    display: none;

    }

}
#header .header_content#header_bottom #header_bottom_inner #logo_block #logo #logo_img {
    width: 169px;
    height: auto;
}


img {
    
    vertical-align:middle;
    overflow-clip-margin: content-box;
    overflow: clip;
}

#header .header_content#header_bottom #header_bottom_inner #logo_block {
    position:relative;
    padding: 15px 0;
    text-align: center; 
}
#header .header_content#header_bottom #header_bottom_inner #logo_block #logo #logo_img_article {

    display: none;
    margin: 0 auto;
    height: 17px;
    width: auto;
}

</style>








