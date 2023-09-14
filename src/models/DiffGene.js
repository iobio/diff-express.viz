class DiffGene {
    /**
     * @param {number} pValue
     * @param {number} log2FoldChange
     * @param {string} geneName
     * @param {Object} [groupDataObj={}]
     * @param {Object} [otherDataObj={}]
     */
    constructor(pValue, log2FoldChange, geneName, groupDataObj={}, otherDataObj={}) {
        this.pValue = pValue;
        this.log2FoldChange = log2FoldChange;
        this.geneName = geneName;
        this.groupDataObj = groupDataObj;
        this.otherDataObj = otherDataObj;
    }
    //getters
    /**
     * @returns {number} pValue
     */
    getPValue() {
        return this.pValue;
    }
    /**
     * @returns {number} log2FoldChange
     */
    getLog2FoldChange() {
        return this.log2FoldChange;
    }
    /**
     * @returns {string} geneName
     */
    getGeneName() {
        return this.geneName;
    }
    /**
     * @returns {Object} groupDataObj
     */
    getGroupDataObj() {
        return this.groupDataObj;
    }
    /**
     * @returns {Object} otherDataObj
     */
    getOtherDataObj() {
        return this.otherDataObj;
    }

    //setters
    setPValue(pValue) {
        this.pValue = pValue;
    }
    setLog2FoldChange(log2FoldChange) {
        this.log2FoldChange = log2FoldChange;
    }
    setGeneName(geneName) {
        this.geneName = geneName;
    }
    setGroupDataObj(groupDataObj) {
        this.groupDataObj = groupDataObj;
    }
    setOtherDataObj(otherDataObj) {
        this.otherDataObj = otherDataObj;
    }
}

export default DiffGene;