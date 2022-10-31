import React from "react";

const SelectForm = () => {
  return (
    <>
      <span>เลือกแบบฟอร์ม : </span>
      <div className="dropdown main" id="change_chart">
        <span className="span_dropdown">เลือกแบบฟอร์ม</span>
        <div class="dropdown_content">
          <ul className="dropdown_list">
            <a className="a_unLink" href="https://www.google.com/">ใบลา</a>  
          </ul>
          <ul className="dropdown_list">
            <a className="a_unLink" href="https://www.google.com/">เบิกงบท่องเที่ยวประจำปี</a>  
          </ul>
          <ul className="dropdown_list">
            <a className="a_unLink" href="https://www.google.com/">เบิกค่าใช้จ่าย</a>  
          </ul>
        </div>
      </div>
    </>
  );
};

export default SelectForm;
