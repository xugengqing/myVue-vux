<template>
    <div>
  <el-table
          :data="tableData"
          style="width: 100%">
    <el-table-column
            prop="id"
            label="编号">
    </el-table-column>
    <el-table-column
            prop="name"
            label="部门名称">
    </el-table-column>
    <el-table-column
            prop="sn"
            label="部门编号">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
                size="mini"
                @click="">编辑</el-button>
        <el-button
                size="mini"
                type="danger"
                @click="">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :currentPage="currentPage"
            :page-sizes="[5, 10, 20, 30]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
    </div>
</template>

<script>
    import {getDepartData} from "@/requset/api";
export default {
    name: "Department",
    data(){
        return{
            currentPage:1,
            pageSize:5,
            tableData:[],
            total:0,
        }
    },
    methods:{
        handleSizeChange(size){
            this.pageSize = size;
            this.queryDepData()
        },
        handleCurrentChange(page){
            this.currentPage = page;
            this.queryDepData()
        },
        queryDepData(){
            getDepartData({
                currentPage:this.currentPage,
                pageSize:this.pageSize,
            }).then(res =>{
                if (res.success === true){
                    this.tableData = res.data.list;
                    this.total = res.data.total
                }
            })
        }
    },
    created() {
        this.queryDepData()
    }
}
</script>

<style scoped>

</style>