function dontSpillTheBeans(secret){
    return new protoSecret(secret);
}

function protoSecret(_secret){
    this.getSecret = function(){
        return _secret
    };
    this.setSecret = function(sec){
        _secret = sec;
    }
}