
function loadsol(row){
		var url = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"1"+"&row1="+row[0];
			$.getJSON(url, function(json){
				for (i=1;i<13;i++){
					 var solution = "json.user[0].sol"+i;
					 if (eval(solution).search("X")==-1){
							$("#row1").append("<li>"+eval(solution)+"</li>");
						}
				}
				});
		var url2 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"2"+"&row1="+row[1];
			$.getJSON(url2, function(json2){
				for (i2=1;i2<13;i2++){
					 var solution2 = "json2.user[0].sol"+i2;
					 if (eval(solution2).search("X")==-1){
							$("#row2").append("<li>"+eval(solution2)+"</li>");
						}
				}
				});
		var url3 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"3"+"&row1="+row[2];
			$.getJSON(url3, function(json3){
				for (i3=1;i3<13;i3++){
					 var solution3 = "json3.user[0].sol"+i3;
					 if (eval(solution3).search("X")==-1){
							$("#row3").append("<li>"+eval(solution3)+"</li>");
						}
				}
				});
		var url4 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"4"+"&row1="+row[3];
			$.getJSON(url4, function(json4){
				for (i4=1;i4<13;i4++){
					 var solution4 = "json4.user[0].sol"+i4;
					 if (eval(solution4).search("X")==-1){
							$("#row4").append("<li>"+eval(solution4)+"</li>");
						}
				}
				});
		var url5 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"5"+"&row1="+row[4];
			$.getJSON(url5, function(json5){
				for (i5=1;i5<13;i5++){
					 var solution5 = "json5.user[0].sol"+i5;
					 if (eval(solution5).search("X")==-1){
							$("#row5").append("<li>"+eval(solution5)+"</li>");
						}
				}
				});
		var url6 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"6"+"&row1="+row[5];
			$.getJSON(url6, function(json6){
				for (i6=1;i6<13;i6++){
					 var solution6 = "json6.user[0].sol"+i6;
					 if (eval(solution6).search("X")==-1){
							$("#row6").append("<li>"+eval(solution6)+"</li>");
						}
				}
				});
		var url7 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"7"+"&row1="+row[6];
			$.getJSON(url7, function(json7){
				for (i7=1;i7<13;i7++){
					 var solution7 = "json7.user[0].sol"+i7;
					 if (eval(solution7).search("X")==-1){
							$("#row7").append("<li>"+eval(solution7)+"</li>");
						}
				}
				});
		var url8 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"8"+"&row1="+row[7];
				$.getJSON(url8, function(json8){
					for (i8=1;i8<13;i8++){
						 var solution8 = "json8.user[0].sol"+i8;
						 if (eval(solution8).search("X")==-1){
								$("#row8").append("<li>"+eval(solution8)+"</li>");
							}
					}
				});
		var url9 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"9"+"&row1="+row[8];
				$.getJSON(url9, function(json9){
					for (i9=1;i9<13;i9++){
						 var solution9 = "json9.user[0].sol"+i9;
						 if (eval(solution9).search("X")==-1){
								$("#row9").append("<li>"+eval(solution9)+"</li>");
							}
					}
				});
		var url10 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"10"+"&row1="+row[9];
					$.getJSON(url10, function(json10){
						for (i10=1;i10<13;i10++){
							 var solution10 = "json10.user[0].sol"+i10;
							 if (eval(solution10).search("X")==-1){
									$("#row10").append("<li>"+eval(solution10)+"</li>");
								}
						}
				});
		var url11 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"11"+"&row1="+row[10];
					$.getJSON(url11, function(json11){
						for (i11=1;i11<13;i11++){
							 var solution11 = "json11.user[0].sol"+i11;
							 if (eval(solution11).search("X")==-1){
									$("#row11").append("<li>"+eval(solution11)+"</li>");
								}
						}
				});
		var url12 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"12"+"&row1="+row[11];
					$.getJSON(url12, function(json12){
						for (i12=1;i12<13;i12++){
							 var solution12 = "json12.user[0].sol"+i12;
							 if (eval(solution12).search("X")==-1){
									$("#row12").append("<li>"+eval(solution12)+"</li>");
								}
						}
				});
		var url13 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"13"+"&row1="+row[12];
					$.getJSON(url13, function(json13){
						for (i13=1;i13<13;i13++){
							 var solution13 = "json13.user[0].sol"+i13;
							 if (eval(solution13).search("X")==-1){
									$("#row13").append("<li>"+eval(solution13)+"</li>");
								}
						}
				});
		var url14 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"14"+"&row1="+row[13];
					$.getJSON(url14, function(json14){
						for (i14=1;i14<13;i14++){
							 var solution14 = "json14.user[0].sol"+i14;
							 if (eval(solution14).search("X")==-1){
									$("#row14").append("<li>"+eval(solution14)+"</li>");
								}
						}
				});
		var url15 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"15"+"&row1="+row[14];
					$.getJSON(url15, function(json15){
						for (i15=1;i15<13;i15++){
							 var solution15 = "json15.user[0].sol"+i15;
							 if (eval(solution15).search("X")==-1){
									$("#row15").append("<li>"+eval(solution15)+"</li>");
								}
						}
				});
		var url16 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"16"+"&row1="+row[15];
					$.getJSON(url16, function(json16){
						for (i16=1;i16<13;i16++){
							 var solution16 = "json16.user[0].sol"+i16;
							 if (eval(solution16).search("X")==-1){
									$("#row16").append("<li>"+eval(solution16)+"</li>");
								}
						}
				});
		var url17 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"17"+"&row1="+row[16];
					$.getJSON(url17, function(json17){
						for (i17=1;i17<13;i17++){
							 var solution17 = "json17.user[0].sol"+i17;
							 if (eval(solution17).search("X")==-1){
									$("#row17").append("<li>"+eval(solution17)+"</li>");
								}
						}
				});
		var url18 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"18"+"&row1="+row[17];
					$.getJSON(url18, function(json18){
						for (i18=1;i18<13;i18++){
							 var solution18 = "json18.user[0].sol"+i18;
							 if (eval(solution18).search("X")==-1){
									$("#row18").append("<li>"+eval(solution18)+"</li>");
								}
						}
				});
		var url19 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"19"+"&row1="+row[18];
					$.getJSON(url19, function(json19){
						for (i19=1;i19<13;i19++){
							 var solution19 = "json19.user[0].sol"+i19;
							 if (eval(solution19).search("X")==-1){
									$("#row19").append("<li>"+eval(solution19)+"</li>");
								}
						}
				});
		var url20 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"20"+"&row1="+row[19];
					$.getJSON(url20, function(json20){
						for (i20=1;i20<13;i20++){
							 var solution20 = "json20.user[0].sol"+i20;
							 if (eval(solution20).search("X")==-1){
									$("#row20").append("<li>"+eval(solution20)+"</li>");
								}
						}
				});
		var url21 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"21"+"&row1="+row[20];
					$.getJSON(url21, function(json21){
						for (i21=1;i21<13;i21++){
							 var solution21 = "json21.user[0].sol"+i21;
							 if (eval(solution21).search("X")==-1){
									$("#row21").append("<li>"+eval(solution21)+"</li>");
								}
						}
				});
		var url22 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"22"+"&row1="+row[21];
					$.getJSON(url22, function(json22){
						for (i22=1;i22<13;i22++){
							 var solution22 = "json22.user[0].sol"+i22;
							 if (eval(solution22).search("X")==-1){
									$("#row22").append("<li>"+eval(solution22)+"</li>");
								}
						}
				});
		var url23 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"23"+"&row1="+row[22];
					$.getJSON(url23, function(json23){
						for (i23=1;i23<13;i23++){
							 var solution23 = "json23.user[0].sol"+i23;
							 if (eval(solution23).search("X")==-1){
									$("#row23").append("<li>"+eval(solution23)+"</li>");
								}
						}
				});
		var url24 = "https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num="+"24"+"&row1="+row[23];
					$.getJSON(url24, function(json24){
						for (i24=1;i24<13;i24++){
							 var solution24 = "json24.user[0].sol"+i24;
							 if (eval(solution24).search("X")==-1){
									$("#row24").append("<li>"+eval(solution24)+"</li>");
								}
						}
				});
}
//https://script.google.com/macros/s/AKfycbwATrw7z4SRVNHaCHElAZLYXhAY5vjuB0hpkGKVX9Q_9k5e0g/exec?uname=usertest&pass=123a&num=1&row1=1243