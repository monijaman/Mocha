import axios from 'axios';
import { expect } from 'chai';
import sinon from 'sinon';
import { fetchUser } from '../api.js';

describe('API Utils', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should fetch user data successfully', async () => {
        const mockResponse = { id: 1, name: 'John Doe', email: 'john@example.com' };
        sinon.stub(axios, 'get').resolves({ data: mockResponse });

        const user = await fetchUser(1);
        expect(user).to.deep.equal(mockResponse);
    });

    it('should handle API errors gracefully', async () => {
        sinon.stub(axios, 'get').rejects(new Error('API Error'));

        try {
            await fetchUser(1);
        } catch (error) {
            expect(error.message).to.equal('API Error');
        }
    });

});
