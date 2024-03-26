<script setup>

</script>

<template>
    <div id="header"> 
        <div id="stock_bar" class="header_content">
            <div id="stock_bar_inner" class="header_inner">
            <ul id="stock_innerWrap" class="">
                <li class="stock_item"><span class="stock_item_detail name">日經</span><span class="stock_item_detail price">40398.03</span><span class="stock_item_detail color arrow down"></span><span class="stock_item_detail color per_change down">0.04%</span></li><li class="stock_item"><span class="stock_item_detail name">台股</span><span class="stock_item_detail price">20126.49</span><span class="stock_item_detail color arrow down"></span><span class="stock_item_detail color per_change down">0.33%</span></li><li class="stock_item"><span class="stock_item_detail name">道瓊</span><span class="stock_item_detail price">39313.64</span><span class="stock_item_detail color arrow down"></span><span class="stock_item_detail color per_change down">0.41%</span></li><li class="stock_item"><span class="stock_item_detail name">美元</span><span class="stock_item_detail price">31.912</span><span class="stock_item_detail color arrow up"></span><span class="stock_item_detail color per_change up">0.078</span></li><li class="stock_item"><span class="stock_item_detail name">美債10Yr</span><span class="stock_item_detail price">4.26%</span><span class="stock_item_detail color arrow up"></span><span class="stock_item_detail color per_change up">0.014</span></li><li class="stock_item"><span class="stock_item_detail name">WTI原油</span><span class="stock_item_detail price">82.08</span><span class="stock_item_detail color arrow up"></span><span class="stock_item_detail color per_change up">0.13</span></li></ul>
        </div>
        </div>

    </div>
</template>



<style scoped>
#stock_bar {
        display: block;
        color: white;
        background-color: #000;
    }
#stock_bar_inner{
        position: relative;
        height: 35px;
    }
#stock_innerWrap{
    position: absolute;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding-right: 0;
    text-align: left;
    zoom: 1;
}
.stock_item{
    paddingt: 8px 15px 8px 8px;
    display: inline-block;
}

.stock_item_detail name{
    color: #ffffff;
    font: 14px ;
    padding: 0px 15px 0px 0px;
}

</style>