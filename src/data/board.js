export default [
  {
    id: 'b1',
    title: 'Todo',
    tickets: [
      {
        id: '1',
        title: 'Add mongodb connection to engine',
        priority: 'Medium',
        assignee: 'Pradeep',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/1'
      },
      {
        id: '2',
        title:
          'Error returned from lookup should have one common message key to be displayed',
        priority: 'High',
        assignee: 'Arnav',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/2'
      },
      {
        id: '3',
        title: 'Load testing on PT server',
        priority: 'Low',
        assignee: 'Mike',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/3'
      }
    ]
  },
  {
    id: 'b2',
    title: 'In Progress',
    tickets: [
      {
        id: '4',
        title: 'Select widget border is missing',
        priority: 'Low',
        assignee: 'Ron',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/4'
      },
      {
        id: '5',
        title: 'Fix CORS issue across all environment',
        priority: 'High',
        assignee: 'Mike',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/5'
      }
    ]
  },
  {
    id: 'b3',
    title: 'Review',
    tickets: [
      {
        id: '6',
        title: 'Imported rule does not show up in the rule list',
        priority: 'Low',
        assignee: 'Arnav',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/6'
      },
      {
        id: '7',
        title: 'Connector not found while editing a connector',
        priority: 'High',
        assignee: 'Pradeep',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/7'
      },
      {
        id: '8',
        title: 'Dropdown height issue in the rule builder',
        priority: 'Low',
        assignee: 'Ron',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/8'
      },
      {
        id: '9',
        title: 'Connector delete functionality is not working',
        priority: 'High',
        assignee: 'Arnav',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/9'
      }
    ]
  },
  {
    title: 'Done',
    tickets: [
      {
        id: '10',
        title: 'Port API server to nodejs 16',
        priority: 'Low',
        assignee: 'Pradeep',
        createdAt: '2020-01-01T00:00:00.000Z',
        url: 'http://something.com/tickets/10'
      }
    ]
  }
]
