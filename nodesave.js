$(function () {
    $('#node1').change(function () {
        localStorage.setItem('n1', this.value);
    });
    $('#node2').change(function () {
        localStorage.setItem('n2', this.value);
    });
	$('#node3').change(function () {
        localStorage.setItem('n3', this.value);
    });
	$('#node4').change(function () {
        localStorage.setItem('n4', this.value);
    });
	$('#node5').change(function () {
        localStorage.setItem('n5', this.value);
    });
	$('#node6').change(function () {
        localStorage.setItem('n6', this.value);
    });
	$('#node7').change(function () {
        localStorage.setItem('n7', this.value);
    });
	$('#node8').change(function () {
        localStorage.setItem('n8', this.value);
    });
	$('#node9').change(function () {
        localStorage.setItem('n9', this.value);
    });
	$('#node10').change(function () {
        localStorage.setItem('n10', this.value);
    });
	$('#node11').change(function () {
        localStorage.setItem('n11', this.value);
    });
	$('#node12').change(function () {
        localStorage.setItem('n12', this.value);
    });
	$('#node13').change(function () {
        localStorage.setItem('n13', this.value);
    });
	$('#node14').change(function () {
        localStorage.setItem('n14', this.value);
    });
	$('#node15').change(function () {
        localStorage.setItem('n15', this.value);
    });
	$('#node16').change(function () {
        localStorage.setItem('n16', this.value);
    });
	for(i=0;i<16;i++){
		if(localStorage.getItem('n'+(i+1))==''){
			localStorage.setItem('n'+(i+1),"0");
		}
	}
    if (localStorage.getItem('n1')) {

        $('#node1').val(localStorage.getItem('n1')).trigger('change');
        $('#node2').val(localStorage.getItem('n2')).trigger('change');
		$('#node3').val(localStorage.getItem('n3')).trigger('change');
		$('#node4').val(localStorage.getItem('n4')).trigger('change');
		$('#node5').val(localStorage.getItem('n5')).trigger('change');
		$('#node6').val(localStorage.getItem('n6')).trigger('change');
		$('#node7').val(localStorage.getItem('n7')).trigger('change');
		$('#node8').val(localStorage.getItem('n8')).trigger('change');
		$('#node9').val(localStorage.getItem('n9')).trigger('change');
		$('#node10').val(localStorage.getItem('n10')).trigger('change');
		$('#node11').val(localStorage.getItem('n11')).trigger('change');
		$('#node12').val(localStorage.getItem('n12')).trigger('change');
		$('#node13').val(localStorage.getItem('n13')).trigger('change');
		$('#node14').val(localStorage.getItem('n14')).trigger('change');
		$('#node15').val(localStorage.getItem('n15')).trigger('change');
		$('#node16').val(localStorage.getItem('n16')).trigger('change');
    }
});