import React from 'react';
import renderer from 'react-test-renderer';

import PlaylistTable from "../../../components/PlaylistTable/PlaylistTable"

describe("Test playlist table snapshot", ()=>{
    it('left drawer renders correctly', () => {
        const mockDetails = [{
            songName: "Rivers",
            duration: 0,
            artist: [{
                name: "SIX60",
            },],
            album: {
            name: "SIX60",
            },
        }];

        const tree = renderer.create(
            <PlaylistTable 
            playlist={mockDetails} 
            />).toJSON();
            
        expect(tree).toMatchSnapshot();
    });
});