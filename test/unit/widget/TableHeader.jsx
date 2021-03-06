import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import TestUtils from "react-addons-test-utils";
import { Table, Column } from "fixed-data-table";
import TableHeader from "../../../src/widget/components/TableHeader";

describe("<TableHeader />", function() {
  const width = 600,
    height = 50,
    data = ["Column 1", "Column 2", "Column 3"],
    className = "header_font-style";

  var wrapper;

  describe("<Table />", function() {
    beforeEach(function () {
      wrapper = shallow(
        <TableHeader width={width} height={height}>
          <Column />
        </TableHeader>
      );
    });

    it("Should have rowHeight prop", function() {
      expect(wrapper.props().rowHeight).to.equal(1);
    });

    it("Should have rowsCount prop", function() {
      expect(wrapper.props().rowsCount).to.equal(0);
    });

    it("Should have width prop", function() {
      expect(wrapper.props().width).to.equal(width);
    });

    it("Should have height prop", function() {
      expect(wrapper.props().height).to.equal(height);
    });

    it("Should have headerHeight prop", function() {
      expect(wrapper.props().headerHeight).to.equal(height);
    });

    it("Should render children", function() {
      expect(wrapper.contains(<Column />)).to.equal(true);
    });
  });
});
