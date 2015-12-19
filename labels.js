$(function() {
    var i = 0;
    // 插入现成的标签
    $('.box_mb_labels div').click(function() {

        var Txt = $(this).text()
        bollean = 0
        $(".label_box span").each(function(i, v) {
            if (Txt == $(v).text())
                bollean = 1

        })

        if (bollean == 0) {
            var Span = '<span class="finallabel">' + Txt + '</span>'
            i = i + 1;
            if (i > 6)
                i = i % 6
            $('#label_box').append('<span>' + Txt + '</span>')
            $('.labels').append(Span).find(".finallabel:eq(-1)").addClass('c' + i)

        };
    })

    // 添加自定义标签
    $('.add_span span').click(function() {
        var Txt = $(".add_span input").val()
        bollean = 0
        $(".label_box span").each(function(i, v) {
            if (Txt == $(v).text())
                bollean = 1

        })
        if (bollean == 0) {
            var newLabel = $(this).siblings("input").val()
            i = i + 1;
            if (i > 6)
                i = i % 6
            $('#label_box').append('<span>' + newLabel + "</span>")
            $('.labels').append('<span class="finallabel ">' + newLabel + '</span>').find(".finallabel:eq(-1)").addClass('c' + i)
	        $(".add_span input").val('')
        }

       
    })



    $(".my_labels_edit").on("click", ".label_box span", function() {
        var that = $(this)
        $(".labels span").each(function(i, v) {
            if ($(v).text() == that.text()) {
                $(v).remove()
            };
        })


        $(this).remove()
    })



    // 专业技能模块
    $('.tab_li span').each(function(index) {
        $(this).click(function() {
            $('ul.tab_con').removeClass('tab_con');
            $('.tab_li span.active').removeClass('active');
            $('.tab_list ul').eq(index).addClass('tab_con');
            // $('.tab_list ul').eq(index).show();
            $(this).addClass('active');
            return false;

        })
    })
		// 对于动态添加的class不生效，改绑定事件
    // $('.tab_con li').click(function(){
    // 	$(this).addClass('active')
    // })

    $('.tab_list').on('click', '.tab_con li', function(){
    	$(this).addClass('active')
    })
    // $(".add_cons").click(function() {
    //     return false;
    //     如何让这个生效？
    // });

    $(".tab_list").click(function() {
        return false;
    });

    $("#input_str").click(function() {
        $(".tab_list").slideDown();
        $(".keys").slideUp();
        return false;

    });

    $("#self_description3").click(function() {
        $(this).hide();
        $("#self_description2").show();

    });


    $(".label_s").on("click", "em.list_em", function() {
        var that = $(this)

        $(".jineng_label label").each(function(i, v) {
            if ($(v).text() == that.siblings("i").text()) {
                $(v).parent("div").remove()
            };
        })
        $('.tab_list li').each(function(i, v){
        	if($(v).children('i').text() == that.siblings('i').text()){
        		$(v).removeClass('active')
        	}
        })

        that.parents("li").remove()
        return false;
    })

    // tab_list lala 不为空，弹出keys，隐藏tab_list
    // 当鼠标聚焦时
    $("#input_str").keyup(function() {
    	var Suggest = $('#input_str').val();
        if ($(Suggest).val() != "") {
        	$('.keys .cat').css("display","none")
            $(".keys").slideDown();

            $(".tab_list").slideUp();
        };
        console.log(Suggest);
        console.log("cat"+Math.ceil(Math.random()*6));

		if(Suggest=="c" || Suggest=="ca" || Suggest=="cat" || Suggest== "cat"+ Math.ceil(Math.random()*6) ) {
		$('.keys .cat').css("display","block");
	}
	// }else{
	// 	$('.cat').slideUp();
	// };
        return false
    });

	// $("#input_str").click(function() {
 //        if ($("#input_str").val() != "") {
 //            $(".keys").slideDown();
 //            $(".tab_list").slideUp();
 //        };
 //        return false
 //    });




    $(".tab_list").on("click", ".tab_con li", function() {

        var that = $(this).text()
        bollean = 0


        $(".add_cons li").each(function(i, v) {
            text = $(v).text()
            if (that == text) {
                bollean = 1

            };
        })
        if (bollean == 0) {
            $(".add_cons").append('<li><i>' + that + '</i><em class="list_em"></em></li>');
            $(".jineng_div").append('<div class="jineng_label"><label>' + that + '</label><i></i></div>');
        };

    })


    $(document).click(function() {
       // for (var i = 1; i <= 6; i++) {
       //      console.log($(".c"+i))
       // };
        $(".tab_list").slideUp();
        $(".keys").slideUp();
        $("#p_node").hide();
    })





    // 自我描述
    $(".zwms_save").click(function() {
        $("#self_des").text("")
        $("#self_des").append($("#my_description").val())
        $("#self_description2").hide();
        if ($("#my_description").val() != "") {
	        $("#self_description1").show();
	    }else{
	    	$("#self_description3").show();
	    };
        $("#my_description").val("")
    })

    $(".zwms_cancel").click(function() {
        $("#self_description2").hide();
        if ($("#self_des").text()=="") {
	        $("#self_description3").show();
	    }else{
	    	$("#self_description1").show();
	    };
    })

    $("#self_description1").mouseenter(function() {
        $(this).find(".footer_edit").show()
    })

    $("#dragDiv6").mouseleave(function() {
        $(this).find(".footer_edit").hide()
    })

    $("#dragDiv6 .span_del").click(function() {
        SavebqClick = 0;
        addlabel = [];
        $("#self_description1").hide()
        $("#self_description3").show()
        $(".labels span").each(function(i, v) {
            $(v).remove()
        })
        $(".label_box span").each(function(i, v) {
            $(v).remove()
        })
    })

    $("#dragDiv6 .span_edit").click(function() {
        $("#self_description1").hide()
        $("#self_description2").show()
        $("#my_description").val($("#self_des").text())
    })

    var add = [],
        SavejnClick = 0;
    $(".zyjn_save").click(function() {
        add = [],
            SavejnClick = 1;
        $("#zyjn2").hide()
        var Num = $(".jineng_div div").size()
        if (Num == 0) {
            $("#zyjn3").show()
        } else {
            $("#zyjn1").show()
        };


        var add_text = $("#add").find("i");
        add_text.each(function(index) {
            add[index] = $(this).text();
        })
        console.log(add)
    })

    $(".zyjn_cancel").click(function() {
        $("#zyjn2").hide()

        if (SavejnClick == 1) {
            $(".jineng_div div").each(function(i, v) {
                $(v).remove()
            })

            $(".add_cons li").each(function(i, v) {
                $(v).remove()
            })
            if (add.length != 0) {
                for (var i = 0; i < add.length; i++) {
                    textsave = add[i]
                    $(".add_cons").append('<li><i>' + textsave + '</i><em class="list_em"></em></li>');
                    $(".jineng_div").append('<div class="jineng_label"><label>' + textsave + '</label><i></i></div>');
                }
                $("#zyjn1").show()
            } else {
                $("#zyjn3").show()
            }
        } else {
            var Num = $(".jineng_div div").size()
            if (Num == 0) {
                $("#zyjn3").show()
            } else {
                alert("将从服务器提取原始数据")
                $("#zyjn1").show()
            };
        }

    })


    $("#dragDiv5 .default").click(function() {
        $(this).parent().hide()
        $("#zyjn2").show()
    })

    $("#zyjn1").mouseenter(function() {
        $(this).find(".footer_edit").show()
    })

    $("#dragDiv5").mouseleave(function() {
        $(this).find(".footer_edit").hide()
    })

    $("#zyjn1 .span_del").click(function() {
        SavejnClick = 0;
        add = [];
        $("#zyjn1").hide()
        $("#zyjn3").show()
        $(".add_cons li").each(function(i, v) {
            $(v).remove()
        })
        $(".jineng_div div").each(function(i, v) {
            $(v).remove()
        })
        $('.tab_list').find('.active').removeClass('active')
    })



    $("#zyjn1 .span_edit").click(function() {
        $("#zyjn1").hide()
        $("#zyjn2").show()
    })

    $(".labelBox").mouseenter(function() {
        $(".edit_pen").show()
    })

    $("#dragDiv8").mouseleave(function() {
        $(this).find(".edit_pen").hide()
    })

    $(".edit_pen").click(function() {
        $(".labelBox").hide()
        $(".my_labels_edit").show()
    })

    var addlabel = [],
        m = 0
    SavebqClick = 0;
    $('.my_labels_save').click(function() {
        SavebqClick = 1;
        addlabel = [];
        $(this).parents('.my_labels_edit').hide()
        Num = $(".label_box span").size()
        if (Num == 0) {
            $(".labelAdd").show()
        } else {
            $(".labelBox").show()

        };

        $(".label_box span").each(function(i, v) {
            addlabel[i] = $(this).text()
        })
        console.log(addlabel)
    })

    $(".my_labels_cancel").click(function() {
        $(".my_labels_edit").hide()
        if (SavebqClick == 1) {
            $(".label_box span").each(function() {
                $(this).remove()
            })
            $(".labels span").each(function() {
                $(this).remove()
            })
            if (addlabel.length != 0) {
                for (var i = 0; addlabel.length > i; i++) {
                    m = m + 1
                    if (m > 6)
                        m = m % 6
                    $(".labels").append('<span class="finallabel">' + addlabel[i] + '</span>').find(".finallabel:eq(-1)").addClass("c" + m)
                    $(".label_box").append('<span>' + addlabel[i] + '</span>')
                };
                $(".labelBox").show()
            } else {
                $(".labelAdd").show()
            }
        } else {
            var Num = $(".labels span").size()
            if (Num == 0) {
                $(".labelAdd").show()
            } else {
                alert("将提取原始数据")
                $(".labelBox").show()
            };
        }
    })

    $(".add_tj a").click(function() {
        $(".oops").show()
        $(".mask").show()
        $('.wbd').val($('#input_str').val())
    })

	$(".labelAdd").click(function() {
        $(this).hide()
        $(".my_labels_edit").show()
    })

    $(".tanclosebtn").click(function() {
        $(".mask").hide()
        $(".oops").hide()
    })

    $(".no").click(function() {
    	$(".wbd").val('')
	    $(".mask").hide()
        $(".oops").hide()
    })

    $(".sure").click(function(){
    	$(".mask").hide()
        $(".oops").hide()
        textAdd=$(".wbd").val()
        $(".add_cons").append('<li><i>' + textAdd + '</i><em class="list_em"></em></li>');
        $(".jineng_div").append('<div class="jineng_label"><label>' + textAdd + '</label><i></i></div>');
        $(".diy").append('<li><i>' + textAdd + '</i><em class="list_em"></em></li>');
        $(".wbd").val('')
        $('#input_str').val('')
    })

	$(".seles_choose").click(function(){
		$("#p_node").show()
		return false;
	})

	$(".seles_hide li").click(function(){
		$('.seles_bqlb').text($(this).children('span').text())
	})



    // 主函数大括号
})
