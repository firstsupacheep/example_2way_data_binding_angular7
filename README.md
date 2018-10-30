# example_2way_data_binding_angular7



  onUpdate(input) {
    if(/\d+\.[0-9]{2}$/.test(input)){
      this.lengths = input.length;
    }
  }

  onBlur(input){
    this.name = input.substring(0, this.lengths)
  }