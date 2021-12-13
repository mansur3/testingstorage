function convert(amount, type) {
    if(type = "mb")
            {
                let mb = amount/(1024 * 1000)
                return mb + "MB"
            }
        else if (type == "kb") 
            {
                let kb = amount / (1000);
                return kb + "KB";
            }
        else if (type == "gb")
            {
                let gb = amount / (1024 * 1024 * 1000)
                return gb + "GB"
            }
    
}

module.exports = convert;